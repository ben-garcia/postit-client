import { Meta } from '@storybook/react';
import React from 'react';

import LoginPage from '.';

export default {
  component: LoginPage,
  title: 'Postit/Pages/Login',
} as Meta;

export const Default = () => <LoginPage />;
