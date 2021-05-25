import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const HeadingIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M6.57 3v2.57h4.16V17h3.09V5.57H18V3H6.57z" />
    <path d="M2 9.65h2.68V17h1.98V9.65h2.69V8H2v1.65z" />
  </Icon>
);

export default HeadingIcon;
