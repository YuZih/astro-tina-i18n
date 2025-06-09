# Astro + TinaCMS + i18n 起始專案

[English](./README.md) | **中文**

這是一個整合 [Astro](https://docs.astro.build/en/guides/cms/tina-cms/)、[TinaCMS](https://tina.io/docs/frameworks/astro)、[TinaCloud](https://tina.io/docs/tina-cloud) 和 [i18n](https://docs.astro.build/en/guides/internationalization/) 的起始專案，並設計用於部署在 Netlify 上。

本專案是基於 [tina-astro-starter](https://github.com/tinacms/tina-astro-starter#) 建立，並擴充了多語系支援、自訂路由，以及完整 TypeScript 類型安全開發支援。

![Demo Screenshot](public/demo.png)

## 功能特色

- 🌐 **多語系支援 (i18n)** — 依據語系組織內容，並支援動態路由。
- 📝 **使用 TinaCMS 的 Headless CMS** — 提供可視化編輯介面與 Git 為基礎的內容管理。
- ⚡ **Astro 前端框架** — 使用現代前端工具進行靜態網站生成。
- ☁️ **TinaCloud 整合** — 可即時連接 TinaCloud 編輯內容。

## 專案目錄結構

### 內容架構

多語系內容儲存在 `src/content` 資料夾中，依語言代碼分類（例如：`en`、`zh-TW`）：

```text
src/content
├── blog
│   ├── en
│   │   ├── first-post.mdx
│   │   └── second-post.mdx
│   └── zh-TW
│       ├── first-post.mdx
│       └── second-post.mdx
├── config
│   └── config.json
└── page
    ├── en
    │   ├── about.mdx
    │   └── home.mdx
    └── zh-TW
        ├── about.mdx
        └── home.mdx
```

### 路由架構

路由定義於 `src/pages` 資料夾中，支援國際化與簡潔網址：

```text
src/pages
├── [...locale]
│   ├── [...slug].astro       // 每個語系的動態頁面路由
│   ├── blog
│   │   ├── [...slug].astro   // 每個語系的部落格文章路由
│   │   └── index.astro       // 每個語系的部落格索引頁
│   └── index.astro           // 每個語系的首頁
├── [...slug].astro           // 非語系頁面的備援路由
├── blog
│   ├── [...slug].astro       // 預設部落格路由
│   └── index.astro           // 預設部落格索引頁
├── index.astro               // 預設首頁
└── rss.xml.js                // RSS 訂閱來源
```

## 開始使用

1. **安裝相依套件：**

   ```bash
   npm install
   ```

2. **啟動開發伺服器：**

   ```bash
   npm run dev
   ```

3. **開啟 TinaCMS 編輯介面：**

   前往 `http://localhost:4321/admin/index.html` 存取 CMS 介面。

## 部署到正式環境

1. **初始化 TinaCloud 後端：**

   ```bash
   npx @tinacms/cli init backend
   ```

2. **新增 `.env` 環境變數檔案：**

   ```env
   NODE_OPTIONS=--max-old-space-size=4096
   PUBLIC_TINA_CLIENT_ID=your-client-id        # 從 TinaCloud app.tina.io 取得
   TINA_TOKEN=your-token                       # 從 TinaCloud app.tina.io 取得
   TINA_PUBLIC_IS_LOCAL=true
   SITE_URL=https://your-project-name.netlify.app  # 替換為你的 Netlify 網址
   ```

3. **在 Netlify 設定環境變數並部署：**

   請確保以下變數已設於 Netlify 專案設定中：

   ```env
   NODE_OPTIONS=--max-old-space-size=4096
   PUBLIC_TINA_CLIENT_ID=your-client-id
   TINA_TOKEN=your-token
   SITE_URL=https://your-project-name.netlify.app
   ```
