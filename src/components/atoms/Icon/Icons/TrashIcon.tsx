import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const TrashIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M16.5 2h-3.79l-.85-.85A.5.5 0 0011.5 1h-3a.5.5 0 00-.35.15L7.29 2H3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM16.5 5h-13a.5.5 0 00-.5.5v12A1.5 1.5 0 004.5 19h11a1.5 1.5 0 001.5-1.5v-12a.5.5 0 00-.5-.5zM6.75 15.5a.75.75 0 01-1.5 0v-7a.75.75 0 011.5 0zm4 0a.75.75 0 01-1.5 0v-7a.75.75 0 011.5 0zm4 0a.75.75 0 01-1.5 0v-7a.75.75 0 011.5 0z" />
  </Icon>
);

export default TrashIcon;
