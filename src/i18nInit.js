import { i18n } from "./i18n";

i18n.use({
  languageOptions: {
    en: "英语",
    cn: "中文"
  },
  source: ["en", "cn"],
  initialLanguage: "cn",
  initialNamespace: "common",
  sourcePath: "locales"
}).load()

export default i18n;
