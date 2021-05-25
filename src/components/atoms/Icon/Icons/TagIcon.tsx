import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const NumberedListIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path
      fill="inherit"
      d="M5.143 3.382a1.562 1.562 0 11-2.21 2.21 1.562 1.562 0 012.21-2.21zm-4.129-.436L1 9.036c0 .519.192 1.03.558 1.396l8.341 8.341c.763.763 2 .763 2.763 0l6.076-6.076c.763-.763.763-2 0-2.762l-8.342-8.342a1.934 1.934 0 00-1.366-.586L2.96 1a1.94 1.94 0 00-1.946 1.946z"
    />
  </Icon>
);

export default NumberedListIcon;
