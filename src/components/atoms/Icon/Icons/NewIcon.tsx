import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const NewIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path
      fill="inherit"
      d="M17.16 10l1.91 2.936-3.271 1.252-.18 3.498-3.382-.91-2.202 2.724-2.202-2.724-3.382.91-.18-3.498L1 12.936 2.91 10 1 7.065l3.271-1.253.18-3.497 3.382.909L10.035.5l2.202 2.724 3.382-.909.18 3.497 3.271 1.253z"
    />
  </Icon>
);

export default NewIcon;
