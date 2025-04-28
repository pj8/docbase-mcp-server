# 技術コンテキスト

## 使用技術
- **TypeScript**: 主要な開発言語
- **Node.js**: 実行環境
- **Model Context Protocol (MCP)**: AIアシスタントとの連携プロトコル
- **DocBase API**: DocBaseのデータにアクセスするためのAPI

## 主要な依存関係
- `@modelcontextprotocol/sdk` (v1.10.0): MCPサーバー機能を提供
- `axios` (v1.6.0): HTTP通信ライブラリ
- `zod` (v3.22.4): スキーマ検証ライブラリ
- `zod-to-json-schema` (v3.22.3): ZodスキーマからJSON Schemaへの変換
- `typescript` (v5.0.0): TypeScript言語サポート

## 開発セットアップ
1. **依存関係のインストール**:
   ```
   npm install
   ```

2. **ビルド**:
   ```
   npm run build
   ```

3. **実行**:
   ```
   npm start
   ```

4. **VSCode設定**:
   - CLINEのMCP Servers設定画面から設定を追加
   - DocBaseのAPIトークンとドメイン名を環境変数として設定

## 技術的制約
1. **DocBase API制約**:
   - APIレート制限に注意が必要
   - APIトークンの権限に応じて利用可能な機能が制限される

2. **CLINE連携の制約**:
   - MCPプロトコルの仕様に従う必要がある
   - 返却するデータ形式は特定のフォーマットに従う必要がある

3. **環境変数要件**:
   - `DOCBASE_API_TOKEN`: DocBase APIアクセストークン
   - `DOCBASE_DOMAIN`: DocBaseのドメイン名（例：your-domain-here.docbase.io の "your-domain-here"部分）

## API仕様
1. **メモ検索API**:
   - パラメータ: 検索クエリ、ページ番号、ページあたりの件数
   - レスポンス: メモ一覧とメタ情報

2. **メモ詳細API**:
   - パラメータ: メモID
   - レスポンス: メモの詳細情報（タイトル、本文、タグ、作成者情報など）
