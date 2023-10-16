import { i18n } from "i18n-trivial";

i18n.use({
  languageOptions: {
    en: '英语',
    cn: '中文',
  },
  // initialLanguage: 'cn',
  initialNamespace: 'common',
  cache: {
    en: require('./locales/en.json'),
    cn: require('./locales/cn.json'),
  },
  dateFormats: {
    en: {
      short: 'MM/dd/yyyy',
      long: 'MM dd, yyyy HH:mm:ss',
    },
    cn: {
      short: 'yyyy年MM月dd日',
      long: 'yyyy年MM月dd日 HH:mm:ss',
    },
  },
  defaultDateFormatKey: 'short',
});

export default i18n;
