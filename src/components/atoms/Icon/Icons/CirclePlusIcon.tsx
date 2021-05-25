import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const CirclePlusIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 36 36">
    <circle cx="18" cy="18" fill="#fff" r="17.5" stroke="inherit" />
    <path
      clipRule="evenodd"
      d="M25.2 16.8h-6v-6a1.2 1.2 0 10-2.4 0v6h-6a1.2 1.2 0 100 2.4h6v6a1.2 1.2 0 102.4 0v-6h6a1.2 1.2 0 100-2.4z"
      fill="inherit"
      fillRule="evenodd"
    />
  </Icon>
);

export default CirclePlusIcon;
