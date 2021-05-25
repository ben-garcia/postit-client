import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const OutboundLinkIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M16 10.77a1 1 0 00-1 1V14a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h2.23a1 1 0 000-2H6a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3v-2.23a1 1 0 00-1-1z" />
    <path d="M17.91 2.62A1 1 0 0017 2h-4a1 1 0 000 2h1.59L9.38 9.19a1 1 0 101.41 1.41L16 5.41V7a1 1 0 002 0V3a1 1 0 00-.09-.38z" />
  </Icon>
);

export default OutboundLinkIcon;
