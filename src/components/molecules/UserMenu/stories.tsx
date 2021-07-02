import { Meta } from '@storybook/react';
import React from 'react';

import UserMenu from '.';
import { UserContext } from '../../../contexts';

export default {
  component: UserMenu,
  title: 'Postit/Molecules/UserMenu',
} as Meta;

export const LoggedOut = () => (
  <UserContext.Provider
    value={{
      dispatch: () => {},
      state: { user: { isLoggedIn: false } },
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <UserMenu />
    </div>
  </UserContext.Provider>
);

export const LoggedIn = () => (
  <UserContext.Provider
    value={{
      dispatch: () => {},
      state: { user: { isLoggedIn: true, username: 'testuser' } },
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <UserMenu />
    </div>
  </UserContext.Provider>
);
