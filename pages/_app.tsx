import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import { UserContextProvider } from '../components';
import { getApolloClient } from '../lib/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  const client = getApolloClient();
  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ApolloProvider>
  );
}
export default MyApp;
