import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const TopIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M1.25 17.5v-10h5v10zm11.25 0h-5V5H5l5-5 5 5h-2.5zm1.25 0v-5h5v5z" />
  </Icon>
);

export default TopIcon;
