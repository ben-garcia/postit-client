import { Meta } from '@storybook/react';
import React from 'react';

import SwitchButton from '.';

export default {
  component: SwitchButton,
  title: 'Postit/Atoms/SwitchButton',
} as Meta;

export const Default = () => {
  const [active, setActive] = React.useState(false);

  return <SwitchButton isActive={active} onChange={() => setActive(!active)} />;
};
