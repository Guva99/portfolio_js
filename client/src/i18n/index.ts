import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "ru"],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18n_lang",
    },
    interpolation: {
      escapeValue: false,
    },
  });

const syncHtmlLang = (lng: string) => {
  document.documentElement.lang = lng.startsWith("ru") ? "ru" : "en";
};
syncHtmlLang(i18n.resolvedLanguage ?? i18n.language ?? "ru");
i18n.on("languageChanged", syncHtmlLang);

export default i18n;
