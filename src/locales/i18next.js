import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from '../db/data'; // src papkasidan to'g'ri yo'l

const Languages = ['en', 'uz', 'ru'];

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: 'en',
    debug: false,
    supportedLngs: Languages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['cookie', 'localStorage'],
      lookupCookie: 'lang',
      lookupLocalStorage: 'lang',
      caches: ['cookie', 'localStorage'],
    },
  });

export default i18n;

