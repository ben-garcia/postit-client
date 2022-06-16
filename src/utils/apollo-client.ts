import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: 'include',
  link: new HttpLink({ uri: 'http://localhost:4000/graphql', fetch }),
  uri: 'http://localhost:4000/graphql',
});

export default apolloClient;
