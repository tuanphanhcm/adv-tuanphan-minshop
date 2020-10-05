import { LanguageProvider } from "../contexts/language/language.provider";
// Language translation messages
import { messages } from "../site-settings/site-translation/message";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider messages={messages}>
      <Component {...pageProps} />;
    </LanguageProvider>
  );
}

export default MyApp;
