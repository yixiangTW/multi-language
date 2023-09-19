import { I18nProvider } from "./i18n";
import { createRoot } from "react-dom/client";
import Language from "./Language";
import App from "./App";
import './i18nInit'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <I18nProvider>
    <App />
    <Language />
  </I18nProvider>
);
