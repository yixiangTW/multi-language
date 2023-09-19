import i18n from './i18nInit'
import { withTranslation } from "./i18n";

function Language({ changeLanguage }) {
  const handleChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className="App">
      <select onChange={handleChange}>
        {Object.keys(i18n.config.languageOptions).map((key) => {
          return (
            <option
              key={key}
              value={key}
              selected={key === i18n.config.initialLanguage}
            >
              {i18n.config.languageOptions[key]}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default withTranslation(Language);
