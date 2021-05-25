import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const ChatMutedIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M9.98 8.21a.4.4 0 01-.566.565L8 7.361 6.586 8.775a.4.4 0 11-.566-.566l1.414-1.414L6.02 5.381a.4.4 0 01.566-.566L8 6.23l1.414-1.413a.4.4 0 01.566.565L8.565 6.795 9.98 8.209zM12.8 1.6H3.2c-.882 0-1.6.718-1.6 1.6v7.395c0 .882.718 1.6 1.6 1.6h2.905l1.23 1.844a.801.801 0 001.33 0l1.23-1.844H12.8c.882 0 1.6-.718 1.6-1.6V3.2c0-.882-.718-1.6-1.6-1.6z" />
  </Icon>
);

export default ChatMutedIcon;
