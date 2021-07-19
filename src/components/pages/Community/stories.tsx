import { Meta } from '@storybook/react';
import React from 'react';

import CommunityPage from '.';
import { Community } from '../../../types';
import { UserContext } from '../../../contexts';

export default {
  component: CommunityPage,
  title: 'Postit/Pages/Community',
} as Meta;

const community: Community = {
  bannerUrl: '#33a8ff',
  bannerHeight: 'small',
  coinCount: 0,
  createdAt: `${Date.now()}`,
  creator: {
    username: 'test',
  },
  description: null,
  id: 1,
  isNsfw: false,
  iconUrl: null,
  location: null,
  name: 'storybooktest',
  topics: null,
  themeColor: '#0079d3',
  type: 'public',
  updatedAt: `${Date.now()}`,
};

export const LoggedIn = () => (
  <UserContext.Provider
    value={{
      dispatch: () => {},
      state: { user: { isLoggedIn: true, username: 'storybookuser' } },
    }}
  >
    <CommunityPage community={community} />
  </UserContext.Provider>
);

export const Guest = () => (
  <UserContext.Provider
    value={{
      dispatch: () => {},
      state: { user: { isLoggedIn: false } },
    }}
  >
    <CommunityPage community={community} />
  </UserContext.Provider>
);
