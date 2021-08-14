import { Meta } from '@storybook/react';
import React from 'react';

import CommunityInfo from '.';
import { Community } from '../../../types';
import { UserContext } from '../../../contexts';

export default {
  component: CommunityInfo,
  title: 'Postit/Molecules/CommunityInfo',
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

export const InCommunityPage = () => (
  <UserContext.Provider
    value={{
      dispatch: () => {},
      state: { user: { isLoggedIn: true, username: 'storybookuser' } },
    }}
  >
    <CommunityInfo community={community} isCreatePost={false} />
  </UserContext.Provider>
);

export const InCreatePost = () => (
  <UserContext.Provider
    value={{
      dispatch: () => {},
      state: { user: { isLoggedIn: true, username: 'storybookuser' } },
    }}
  >
    <CommunityInfo community={community} />
  </UserContext.Provider>
);
