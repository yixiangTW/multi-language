import React, { useContext, useEffect, useState } from "react";
const I18nContext = React.createContext();


export const i18n = {
  config: {},
  use(config) {
    this.config = config;
    return this;
  },
};


export const I18nProvider = ({ children }) => {
  const {
    config: { initialLanguage, cache }
  } = i18n;

  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    console.log(i18n.config.cache)
    if (cache[currentLanguage]) {
      setTranslations(cache[currentLanguage]);
    }
  }, [currentLanguage]);
  const t = (namespace, key, payload) => {
    let result;
    if (typeof namespace !== "undefined") {
      if (translations[namespace] && translations[namespace][key]) {
        result = translations[namespace][key];
      } else {
        result = key;
      }
    } else {
      result = translations[key] || key;
    }
    if (typeof payload !== "undefined") {
      Object.keys(payload).map((key) => {
        return (result = result.replace(`{${key}}`, payload[key]));
      });
      return result;
    }

    return result;
  };
  const changeLanguage = (lan) => {
    setCurrentLanguage(lan);
  };

  return (
    <I18nContext.Provider value={{ t, changeLanguage, currentLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (namespace) => {
  const { t, changeLanguage, currentLanguage } = useContext(I18nContext);
  return {
    t: (key, payload) => t(namespace, key, payload),
    changeLanguage,
    currentLanguage
  };
};

export const withTranslation = (Component, namespace) => (props) => {
  const { t, changeLanguage, currentLanguage } = useI18n(
    namespace || i18n.config.initialNamespace
  );
  return (
    <Component
      props={props}
      t={t}
      changeLanguage={changeLanguage}
      currentLanguage={currentLanguage}
    />
  );
};
