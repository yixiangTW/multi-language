import React from 'react';
import { withTranslation, i18n } from 'i18n-trivial';

function Language({ changeLanguage }) {
  const handleChange = (e) => {
    changeLanguage(e.target.value);
  };
  const languageOptions = i18n.config.languageOptions || {};
  return (
    <div className="App">
      <select id="changeLanguage" onChange={handleChange} defaultValue={i18n.config.initialLanguage}>
        {Object.keys(languageOptions).map((key) => (
          <option
            key={key}
            value={key}
          >
            {languageOptions[key]}
          </option>
        ))}
      </select>
    </div>
  );
}
export default withTranslation(Language);
