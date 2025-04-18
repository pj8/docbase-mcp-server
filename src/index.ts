#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { DocBaseClient } from './client.js';

// 環境変数から設定を取得
const API_TOKEN = process.env.DOCBASE_API_TOKEN;
const DOMAIN = process.env.DOCBASE_DOMAIN;

// APIトークンとドメインが設定されているか確認
if (!API_TOKEN || !DOMAIN) {
  console.error('環境変数 DOCBASE_API_TOKEN と DOCBASE_DOMAIN を設定してください');
  process.exit(1);
}

// DocBase APIクライアントの初期化
const docbaseClient = new DocBaseClient(API_TOKEN, DOMAIN);

// MCPサーバーを作成
const server = new McpServer({
  name: "DocBase MCP Server",
  version: "1.0.0",
});

// 検索ツールを追加
server.tool(
  "search_posts",
  {
    q: z.string().optional().describe("検索文字列"),
    page: z.number().optional().describe("ページ番号"),
    per_page: z.number().optional().describe("ページあたりのメモ数"),
  },
  async ({ q, page, per_page }) => {
    try {
      const result = await docbaseClient.searchPosts({
        q,
        page,
        per_page,
      });
      
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          content: [{ type: "text", text: error.message }],
          isError: true,
        };
      }
      return {
        content: [{ type: "text", text: "Unknown error" }],
        isError: true,
      };
    }
  }
);

// メモ詳細取得ツールを追加
server.tool(
  "get_post",
  {
    id: z.number().describe("メモID"),
  },
  async ({ id }) => {
    try {
      const result = await docbaseClient.getPost({ id });
      
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          content: [{ type: "text", text: error.message }],
          isError: true,
        };
      }
      return {
        content: [{ type: "text", text: "Unknown error" }],
        isError: true,
      };
    }
  }
);

// サーバーを起動
async function start() {
  try {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error(`DocBase MCP Server ready (Domain: ${DOMAIN})`);
    console.error(`Available tools: search_posts, get_post`);
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

start().catch(console.error);
