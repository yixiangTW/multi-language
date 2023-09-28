import { withTranslation } from "i18n-trivial";
// import { withTranslation } from "./i18n";
function App({ t, currentLanguage }) {
  return (
    <div className="App">
      {t("name")}
      {t("address", { city: currentLanguage === 'en' ? "xian" : '西安' })}
    </div>
  );
}

export default withTranslation(App);
