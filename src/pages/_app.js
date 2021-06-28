import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { UserProvider } from '../contexts';

import '../sass/main.scss';
import '../components/atoms/SwitchButton/styles.scss';
import '../components/molecules/UserMenu/styles.scss';
import '../components/organisms/LoginModal/styles.scss';
import '../components/organisms/NavBar/NavBarDesktop/styles.scss';
import '../components/organisms/NavBar/NavBarMobile/styles.scss';
import '../components/organisms/NavBar/NavBarMobile/HamburgerButton/styles.scss';
import '../components/organisms/NavBar/NavBarMobile/NavBarMobileMenu/styles.scss';
import '../components/organisms/SignUpModal/styles.scss';
import '../components/pages/Login/styles.scss';
import '../components/pages/SignUp/styles.scss';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
  );
}

export default MyApp;
