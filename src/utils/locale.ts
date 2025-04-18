"use client";

import { locales, Locale } from "@/i18n/config";

export function setLocale(locale: Locale) {
  if (!locales.includes(locale)) {
    console.warn(`Unsupported locale: ${locale}`);
    return;
  }

  // Set cookie valid 1 tahun
  document.cookie = `locale=${locale}; path=/; max-age=31536000`;
  window.location.reload();
}

export function getCurrentLocaleFromCookie(): Locale | null {
  const match = document.cookie.match(/(?:^|;\s*)locale=([^;]+)/);
  const locale = match?.[1] as Locale | undefined;

  return locale && locales.includes(locale) ? locale : null;
}

export function getPreferedLocale(): Locale | null {
  const acceptLang = navigator.language || navigator.languages[0] || "";
  const preferredLang = acceptLang.split("-")[0];
  return preferredLang as Locale;
}
