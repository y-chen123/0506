import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import zh_TW from "./locales/zh_TW.json";
import es from "./locales/es.json";

const resources = {
  en: {
    translation: en, 
  },
  es: {
    translation: es, 
  },
  zh: {
    translation: zh_TW, 
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "zh",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
