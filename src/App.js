import { withTranslation } from "i18n-trivial";
// import { withTranslation } from "./i18n";
function App({ t, currentLanguage }) {
  return (
    <div className="App">
			<div> name: {t('name')}</div>
			<div> apple: {t('apples', {_count: 3})}</div>
			<div> address: {t('address', { city: currentLanguage === 'en' ? 'xian' : '西安' })}</div>
    </div>
  );
}

export default withTranslation(App);
