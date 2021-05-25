import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const ChatIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 00-8.36 15.51L.57 18.73c-.16.52.19.86.7.7l3.22-1.08A10 10 0 1010 0zM5.54 11.41A1.39 1.39 0 116.93 10a1.39 1.39 0 01-1.39 1.41zm4.46 0A1.39 1.39 0 1111.39 10 1.39 1.39 0 0110 11.41zm4.44 0A1.39 1.39 0 1115.83 10a1.39 1.39 0 01-1.39 1.41z" />
  </Icon>
);

export default ChatIcon;
