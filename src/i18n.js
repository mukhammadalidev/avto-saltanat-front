import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: require("../public/locales/uz/translation.json") },
    ru: { translation: require("../public/locales/ru/translation.json") },
    en: { translation: require("../public/locales/en/translation.json") }
  },
  lng: "uz", // Default til
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
