## 機能
- [x] [メモの検索API](https://help.docbase.io/posts/92984)
- [x] [メモの詳細取得API](https://help.docbase.io/posts/97204)

## Install

- VSCode > CLINE > 設定画面 > Configure MCP Servers

<img width="1032" alt="Screenshot 2025-04-18 at 10 43 30" src="https://github.com/user-attachments/assets/02f0a4af-94af-4864-9f66-a5c1e92de1b6" />

- 下記のようにdocbase-mcp-serverの設定を追加します。
  - DOCBASE_API_TOKENは、<https://your-domain-here.docbase.io/settings/tokens/new> で取得します
  - DOCBASE_DOMAINは、<https://your-domain-here.docbase.io> ならば、your-domain-here です

```jsonc
{
  "mcpServers": {
    "docbase": {
      "autoApprove": [
        "search_posts",
        "get_post"
      ],
      "disabled": false,
      "timeout": 60,
      "command": "npx",
      "args": [
        "-y",
        "https://github.com/pj8/docbase-mcp-server"
      ],
      "env": {
        "DOCBASE_API_TOKEN": "****", // Get token here https://your-domain-here.docbase.io/settings/tokens/new
        "DOCBASE_DOMAIN": "your-domain-here" // https://your-domain-here.docbase.io
      },
      "transportType": "stdio"
    }
  }
}
```
