// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tinaDirective from "./astro-tina-directive/register";
import { defaultLocale, locales } from './src/i18n/ui.ts';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || `https://${process.env.VERCEL_URL}`,
  integrations: [mdx(), sitemap(), react(), tinaDirective()],
  base: '/',
  trailingSlash: "ignore", //  Match URLs regardless of whether a trailing ”/” exists, ex: allowing both '/en/about', '/en/about/' 
  i18n: {
		defaultLocale,
		locales,
		routing: {
			prefixDefaultLocale: true, // URLs will have a [locale] prefix
			redirectToDefaultLocale: true, // Root path '/' will redirect to default locale '/en'
			fallbackType: 'redirect',
		},
	},
});
