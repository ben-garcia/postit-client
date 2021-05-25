import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const CakeIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 40 40">
    <path d="M37.5 22.5V20h-35v15c0 1.4 1.1 2.5 2.5 2.5h30c1.4 0 2.5-1.1 2.5-2.5H6.2c-.6 0-1.2-.5-1.2-1.2s.6-1.2 1.2-1.2h31.3V30H6.2c-.6 0-1.2-.5-1.2-1.2s.6-1.2 1.2-1.2h31.3V25H6.2c-.6 0-1.2-.5-1.2-1.2s.6-1.2 1.2-1.2h31.3zM22.5 6c0 1.4-1.1 2.5-2.5 2.5S17.5 7.4 17.5 6 20 0 20 0s2.5 4.6 2.5 6zM20 15c-.7 0-1.3-.6-1.3-1.2v-2.5c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2v2.5c.1.7-.4 1.2-1.1 1.2z" />
    <path d="M22.8 11.3v2.3c0 1.4-1 2.7-2.5 2.9-1.6.2-3-1.1-3-2.7v-5-.1l-.8-.4c-.9-.4-2-.3-2.7.4L2.5 18.5h35l-14.7-7.2z" />
  </Icon>
);

export default CakeIcon;
