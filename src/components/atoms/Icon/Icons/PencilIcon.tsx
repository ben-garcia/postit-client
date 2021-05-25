import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const PencilIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M5 15a1 1 0 01-1-1v-2.83a1 1 0 01.29-.7l8.09-8.09a1 1 0 011.41 0l2.83 2.83a1 1 0 010 1.41l-8.08 8.09a1 1 0 01-.71.29zm12 1a1 1 0 010 2H3a1 1 0 010-2z" />
  </Icon>
);

export default PencilIcon;
