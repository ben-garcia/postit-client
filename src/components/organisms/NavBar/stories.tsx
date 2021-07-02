import { Meta } from '@storybook/react';
import React from 'react';

import NavBar from '.';
import { UserContext } from '../../../contexts';

export default {
  component: NavBar,
  title: 'Postit/Organism/NavBar',
} as Meta;

export const LoggedOut = () => (
  <UserContext.Provider
    value={{
      dispatch: () => {},
      state: { user: { isLoggedIn: false } },
    }}
  >
    <NavBar />
  </UserContext.Provider>
);
export const LoggedIn = () => (
  <UserContext.Provider
    value={{
      dispatch: () => {},
      state: { user: { isLoggedIn: true, username: 'testuser' } },
    }}
  >
    <NavBar />
  </UserContext.Provider>
);
