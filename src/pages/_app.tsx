import { LanguageProvider } from "contexts/language/language.provider";
import AppLayout from "layouts/app-layout";
// Language translation messages
import { messages } from "site-settings/site-translation/message";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider messages={messages}>
      <AppLayout>
        <Component {...pageProps} />;
      </AppLayout>
    </LanguageProvider>
  );
}

export default MyApp;
