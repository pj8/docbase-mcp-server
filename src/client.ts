import axios from 'axios';
import type { SearchPostsParams, SearchPostsResponse, GetPostParams, GetPostResponse } from './types.js';

export class DocBaseClient {
  private client;
  private domain: string;

  constructor(apiToken: string, domain: string) {
    this.domain = domain;
    this.client = axios.create({
      baseURL: 'https://api.docbase.io',
      headers: {
        'X-DocBaseToken': apiToken,
        'Content-Type': 'application/json'
      }
    });
  }

  /**
   * メモの検索を行う
   */
  async searchPosts(params: SearchPostsParams): Promise<SearchPostsResponse> {
    try {
      const response = await this.client.get(`/teams/${this.domain}/posts`, {
        params: {
          q: params.q || '',
          page: params.page || 1,
          per_page: params.per_page || 20
        }
      });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`DocBase API Error: ${error.response?.status} - ${error.response?.statusText}`);
      }
      throw error;
    }
  }

  /**
   * メモの詳細を取得する
   */
  async getPost(params: GetPostParams): Promise<GetPostResponse> {
    try {
      const response = await this.client.get(`/teams/${this.domain}/posts/${params.id}`);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`DocBase API Error: ${error.response?.status} - ${error.response?.statusText}`);
      }
      throw error;
    }
  }
}
