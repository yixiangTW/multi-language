import React from 'react'
import { withTranslation } from "i18n-trivial";

function App({ t, currentLanguage, fd }) {
  const [count, setCount] = React.useState(3);
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  return (
    <div className="App">
      <div>{fd(new Date(), 'long')}</div>
      <div id="name">
        name:
        {t('name')}
      </div>
      <div id="apple">
        apple:
        {t('apples', { _count: count })}
      </div>
      <div id="address">
        address:
        {t('address', { city: currentLanguage === 'en' ? 'xian' : '西安' })}
      </div>
      <div>
        {t('changeApple')}
        <input id="changeCount" value={count} type="number" onChange={handleChange} />
      </div>
    </div>
  );
}

export default withTranslation(App);