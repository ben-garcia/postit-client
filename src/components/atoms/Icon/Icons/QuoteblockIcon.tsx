import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const QuoteblockIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M8.63 4H5.36L2 9.8V16h7.2V9.24H6.75L8.63 4zM15.56 9.24L17.39 4h-3.23L10.8 9.8V16H18V9.24h-2.44z" />
  </Icon>
);

export default QuoteblockIcon;
