import React, { createContext, useState, useEffect, useContext } from "react";
import Cookie from "js-cookie";
import { IntlProvider } from "react-intl";
import { isLocale, isRTL } from "./language.utils";

const LanguageContext = createContext({} as any);

export const LanguageProvider = ({ children, messages }) => {
  const [locale, setLocale] = useState("vn");
  const changeLanguage = (newLocale): void => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    Cookie.set("locale", newLocale);
  };

  useEffect(() => {
    const localSetting = Cookie.get("locale");
    if (localSetting && isLocale(localSetting)) {
      document.documentElement.lang = localSetting;
      setLocale(localSetting);
    }
  }, [locale]);

  let isRtl = isRTL(locale);

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, isRtl }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLocale = () => useContext(LanguageContext);
