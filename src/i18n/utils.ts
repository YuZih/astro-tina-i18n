import { defaultLocale, ui } from './ui';

// https://docs.astro.build/en/recipes/i18n/

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLocale;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLocale]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLocale][key];
  }
}