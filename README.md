# Astro + TinaCMS + i18n Starter

**English** | [繁體中文](./README.zh-TW.md)

This is a starter project integrated with [Astro](https://docs.astro.build/en/guides/cms/tina-cms/), [TinaCMS](https://tina.io/docs/frameworks/astro), [TinaCloud](https://tina.io/docs/tina-cloud), and [i18n](https://docs.astro.build/en/guides/internationalization/). It is designed for deployment on Netlify.

The project is built based on [tina-astro-starter](https://github.com/tinacms/tina-astro-starter#) and extends it with multilingual support, customized routing, and full TypeScript support for type-safe development.

![Demo Screenshot](public/demo.png)

## Features

- 🌐 **Multilingual Support (i18n)** — Organize content by locale with dynamic routing.
- 📝 **Headless CMS with TinaCMS** — Visual editing with Git-based content management.
- ⚡ **Astro Framework** — Static site generation with modern frontend tooling.
- ☁️ **TinaCloud Integration** — Ready to connect to TinaCloud for real-time content editing.

## File Directory

### Content Structure

Multilingual content is stored in the `src/content` folder, with subfolders for each language code (e.g., `en`, `zh-TW`):

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

### Routing Structure

Routes are defined dynamically in the `src/pages` folder to support internationalization and clean URLs:

```text
src/pages
├── [...locale]
│   ├── [...slug].astro       // Generic page routing per locale
│   ├── blog
│   │   ├── [...slug].astro   // Blog post routing per locale
│   │   └── index.astro       // Blog index per locale
│   └── index.astro           // Home page per locale
├── [...slug].astro           // Fallback for non-localized pages
├── blog
│   ├── [...slug].astro       // Default blog routing
│   └── index.astro           // Default blog index
├── index.astro               // Default homepage
└── rss.xml.js                // RSS feed
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open TinaCMS:**

   Navigate to `http://localhost:4321/admin/index.html` to access the CMS interface.

## Deploy to Production

1. **Initialize TinaCloud backend:**

   ```bash
   npx @tinacms/cli init backend
   ```

2. **Add `.env` file:**

   ```env
   NODE_OPTIONS=--max-old-space-size=4096
   PUBLIC_TINA_CLIENT_ID=your-client-id        # Grab from TinaCloud app.tina.io
   TINA_TOKEN=your-token                       # Grab from TinaCloud app.tina.io
   TINA_PUBLIC_IS_LOCAL=true
   SITE_URL=https://your-project-name.netlify.app  # Replace with your Netlify site URL
   ```

3. **Configure environment variables on Netlify and deploy:**

   Ensure the following variables are set in your Netlify project settings:

   ```env
   NODE_OPTIONS=--max-old-space-size=4096
   PUBLIC_TINA_CLIENT_ID=your-client-id        # Grab from TinaCloud app.tina.io
   TINA_TOKEN=your-token                       # Grab from TinaCloud app.tina.io
   SITE_URL=https://your-project-name.netlify.app  # Replace with your Netlify site URL
   ```
