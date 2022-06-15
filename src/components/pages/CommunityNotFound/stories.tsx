import { Meta } from '@storybook/react';
import React from 'react';

import CommunityNotFound from '.';
import { UserContext } from '../../../contexts';

export default {
  component: CommunityNotFound,
  title: 'Postit/Pages/CommunityNotFound',
} as Meta;

export const LoggedIn = () => (
  <UserContext.Provider
    value={{
      dispatch: () => {},
      state: { user: { isLoggedIn: true, username: 'storybookuser' } },
    }}
  >
    <CommunityNotFound />
  </UserContext.Provider>
);

export const Guest = () => (
  <UserContext.Provider
    value={{
      dispatch: () => {},
      state: { user: { isLoggedIn: false } },
    }}
  >
    <CommunityNotFound />
  </UserContext.Provider>
);
