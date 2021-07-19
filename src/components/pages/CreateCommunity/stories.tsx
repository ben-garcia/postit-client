import { Meta } from '@storybook/react';
import React from 'react';

import CreateCommunityPage from '.';
import { UserContext } from '../../../contexts';

export default {
  component: CreateCommunityPage,
  title: 'Postit/Pages/CreateCommunityPage',
} as Meta;

export const Default = () => (
  <UserContext.Provider
    value={{
      dispatch: () => {},
      state: { user: { isLoggedIn: true, username: 'storybookuser' } },
    }}
  >
    <CreateCommunityPage />
  </UserContext.Provider>
);
