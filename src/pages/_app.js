import { ApolloProvider } from '@apollo/client';
import { SupernovaProvider } from 'supernova-ui';

import { UserProvider } from '../contexts';
import { apolloClient } from '../utils';

import '../sass/main.scss';
import '../components/atoms/SwitchButton/styles.scss';
import '../components/molecules/UserMenu/styles.scss';
import '../components/organisms/CreateCommunityModal/styles.scss';
import '../components/organisms/LoginModal/styles.scss';
import '../components/organisms/NavBar/NavBarDesktop/styles.scss';
import '../components/organisms/NavBar/NavBarMobile/styles.scss';
import '../components/organisms/NavBar/NavBarMobile/HamburgerButton/styles.scss';
import '../components/organisms/NavBar/NavBarMobile/NavBarMobileMenu/styles.scss';
import '../components/organisms/SignUpModal/styles.scss';
import '../components/pages/Community/styles.scss';
import '../components/pages/CommunityNotFound/styles.scss';
import '../components/pages/CreateCommunity/styles.scss';
import '../components/pages/Login/styles.scss';
import '../components/pages/SignUp/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <SupernovaProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </SupernovaProvider>
    </ApolloProvider>
  );
}

export default MyApp;
