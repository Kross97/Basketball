import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

import en from './static/locales/en';

const options = {
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],
  cookieMinutes: 10,
  cookieDomain: 'myDomain',
  // eslint-disable-next-line no-undef
  htmlTag: document.documentElement,
  checkWhitelist: true,
  cookieOptions: { path: '/' },
};

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'sign',
    resources: {
      en,
    },
    react: {
      useSuspense: false,
    },
    detection: options,
  });

export default i18next;
