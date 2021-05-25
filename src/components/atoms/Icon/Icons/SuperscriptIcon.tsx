import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const SuperscriptIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M6.94 3L2 17h2.83l1.07-3.11h4.75l1 3.11h3.11L9.86 3zm-.28 8.67l1.63-4.75 1.6 4.75zM16.06 3h-1.14L13 8.49h1.11l.42-1.22h1.86l.41 1.22H18zm-1.25 3.4l.64-1.86.63 1.86z" />
  </Icon>
);

export default SuperscriptIcon;
