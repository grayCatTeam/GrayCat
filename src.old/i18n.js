import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './Config/Lang/en.json';
import translationTR from './Config/Lang/tr.json';

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: 'tr',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
