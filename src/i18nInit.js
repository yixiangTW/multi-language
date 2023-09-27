import { i18n } from "i18n-trivial";

// import { i18n } from "./i18n";

i18n.use({
  languageOptions: {
    en: "英语",
    cn: "中文"
  },
  initialLanguage: "cn",
  initialNamespace: "common",
  cache: {
    en: require('./locales/en.json'),
    cn: require('./locales/cn.json')
  }
})

export default i18n;
