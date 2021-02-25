import React from 'react';
import { Meta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

export const Primary: React.FC<{}> = () => <Button />;
