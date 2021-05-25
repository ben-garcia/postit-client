import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const TableIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M17 2H3a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zM4 6h5v3.8H4zm7 0h5v3.8h-5zm-7 5.8h5V16H4zm7 4.2v-4.2h5V16z" />
  </Icon>
);

export default TableIcon;
