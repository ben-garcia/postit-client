import { Meta } from '@storybook/react';
import React from 'react';

import { AddIcon } from 'supernova-ui';
import Button from '.';

export default {
  component: Button,
  title: 'Postit/Atoms/Button',
} as Meta;

export const Primary = () => <Button primary>Sign Up</Button>;
export const Secondary = () => <Button secondary>Log In</Button>;
export const WidthIcon = () => (
  <Button leftIcon={<AddIcon fill="white" size="15px" />}>Join</Button>
);
