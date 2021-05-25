import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const TriangleUpIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 10 8">
    <path d="M4.152 1.357a1 1 0 0 1 1.696 0L9.044 6.47A1 1 0 0 1 8.196 8H1.804a1 1 0 0 1-.848-1.53l3.196-5.113z" />
  </Icon>
);

export default TriangleUpIcon;
