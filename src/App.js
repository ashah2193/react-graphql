import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ExchangeRates from './exchangeRates';

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
        <ExchangeRates/>
    </ApolloProvider>
  );
};

export default App;

