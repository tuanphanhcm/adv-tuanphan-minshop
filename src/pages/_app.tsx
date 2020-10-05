import { LanguageProvider } from "contexts/language/language.provider";
import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "utils/apollo";
import AppLayout from "layouts/app-layout";
// Language translation messages
import { messages } from "site-settings/site-translation/message";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <LanguageProvider messages={messages}>
        <AppLayout>
          <Component {...pageProps} />;
        </AppLayout>
      </LanguageProvider>
    </ApolloProvider>
  );
}

export default MyApp;
