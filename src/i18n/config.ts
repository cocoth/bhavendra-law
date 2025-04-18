export const locales = ['en', 'id', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = 'id' as const;
