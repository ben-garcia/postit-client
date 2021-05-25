import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const StrikethroughIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M11.86 12a1.36 1.36 0 01.7 1.19c0 1.07-1 1.59-2.42 1.59a4.12 4.12 0 01-3.75-2.36l-2.31 1.37A6.21 6.21 0 0010 17.2c3.86 0 5.55-2 5.55-4.22a4 4 0 00-.12-1zM17 9h-5.39l-1.09-.31c-1.82-.51-2.85-.9-2.85-2 0-.82.71-1.39 2-1.39a4.13 4.13 0 013.41 2l2.12-1.65A6.23 6.23 0 009.69 2.8c-3 0-5 1.56-5 4.14A3.31 3.31 0 005.31 9H3a1 1 0 000 2h14a1 1 0 000-2z" />
  </Icon>
);

export default StrikethroughIcon;
