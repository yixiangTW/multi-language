import { withTranslation } from "./i18n";
function App({ t }) {
  return (
    <div className="App">
      {t("name")}
      {t("address", { city: "xian" })}
    </div>
  );
}

export default withTranslation(App);
