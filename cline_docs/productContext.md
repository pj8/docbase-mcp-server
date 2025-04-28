# プロダクトコンテキスト

## プロジェクトの目的
このプロジェクト「docbase-mcp-server」は、Model Context Protocol (MCP) を使用してDocBaseとCLINE（AIアシスタント）を連携させるためのサーバーです。DocBase API を活用し、CLINEがDocBaseのメモを検索したり詳細を取得したりできるようにします。

## 解決する問題
1. AIアシスタントがDocBaseのコンテンツにアクセスできない問題
2. DocBaseの情報をAIワークフローに統合する難しさ
3. DocBaseの知識ベースを対話型のAIアシスタントで活用する方法の欠如

## 機能
1. DocBaseメモの検索 - キーワードや条件でメモを検索できる
2. DocBaseメモの詳細取得 - 特定のメモのすべての情報を取得できる

## 使用方法
1. VSCodeでCLINEのMCP Servers設定を構成する
2. DocBaseのAPIトークンとドメイン名を設定する
3. CLINEと対話中にDocBaseの情報を引用したり参照したりできるようになる
4. CLINEにDocBase記事URLを与えて概要を説明させるなどの高度な機能を使用できる
