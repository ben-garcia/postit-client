import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const EyeIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 40 40">
    <path d="M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z" />
  </Icon>
);

export default EyeIcon;
