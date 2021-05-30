import { Meta } from '@storybook/react';
import React from 'react';

import UserMenu from '.';

export default {
  component: UserMenu,
  title: 'Postit/Molecules/UserMenu',
} as Meta;

export const LoggedOut = () => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <UserMenu />
  </div>
);
