import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const BoldIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M12.44 9.72a3.07 3.07 0 002.67-3.22c0-2.84-2.42-3.46-5-3.46h-5.6V17h5.89c2.61 0 5.09-1 5.09-3.86 0-2.23-1.35-3.14-3.05-3.42zm-4.9-4.34h2.31c1.65 0 2.31.61 2.31 1.7s-.74 1.68-2.35 1.68H7.54zM10 14.65H7.54v-3.7h2.35c1.7 0 2.59.61 2.59 1.83s-.76 1.87-2.48 1.87z" />
  </Icon>
);

export default BoldIcon;
