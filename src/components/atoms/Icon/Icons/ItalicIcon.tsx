import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const ItalicIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M7.24 17h3.06l1.8-10.15H9.05L7.24 17zM9.7 3l-.42 2.46h3.06L12.76 3H9.7z" />
  </Icon>
);

export default ItalicIcon;
