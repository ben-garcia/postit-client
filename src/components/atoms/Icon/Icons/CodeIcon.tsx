import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const CodeIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M18.8 9.4l-3-4a1 1 0 10-1.6 1.2l2.55 3.4-2.55 3.4a1 1 0 101.6 1.2l3-4a1 1 0 000-1.2zM5.6 5.2a1 1 0 00-1.4.2l-3 4a1 1 0 000 1.2l3 4a1 1 0 001.6-1.2L3.25 10 5.8 6.6a1 1 0 00-.2-1.4zM12.24 1a1 1 0 00-1.24.76l-4 16a1 1 0 102 .48l4-16A1 1 0 0012.24 1z" />
  </Icon>
);

export default CodeIcon;
