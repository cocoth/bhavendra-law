import {getRequestConfig} from 'next-intl/server';
import {cookies, headers} from 'next/headers';
import {locales, defaultLocale} from './config';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale')?.value;

  if (localeCookie && locales.includes(localeCookie as any)) {
    return {
      locale: localeCookie,
      messages: (await import(`../../messages/${localeCookie}.json`)).default
    };
  }
  const head = await headers();
  const acceptLang =  head.get('accept-language') || '';
  const preferredLang = acceptLang.split(',')[0].split('-')[0];

  const locale = locales.includes(preferredLang as any) ? preferredLang : defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
