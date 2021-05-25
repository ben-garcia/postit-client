import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const NumberedListIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M17.65 1.58H2.35A2.29 2.29 0 000 3.82v12.35a2.3 2.3 0 002.35 2.25h15.3A2.29 2.29 0 0020 16.18V3.82a2.29 2.29 0 00-2.35-2.24zm1.17 14.2a1.59 1.59 0 01-1.58 1.59H5.59V2.63h11.65a1.59 1.59 0 011.59 1.59z" />
    <path d="M15.9 9.37H9.84l2.71-2.71a.63.63 0 00-.89-.9L7.87 9.55a.6.6 0 00-.14.21.66.66 0 000 .48.6.6 0 00.14.21l3.79 3.78a.63.63 0 00.89-.89l-2.71-2.71h6.06a.63.63 0 000-1.26z" />
  </Icon>
);

export default NumberedListIcon;
