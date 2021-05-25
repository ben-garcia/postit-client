import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const HotIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M10.31.61a.5.5 0 00-.61 0c-.29.22-6.95 5.46-6.95 10.86a8.77 8.77 0 003.14 6.91.5.5 0 00.75-.64 3.84 3.84 0 01-.55-2A7.2 7.2 0 0110 9.56a7.2 7.2 0 013.91 6.23 3.84 3.84 0 01-.55 2 .5.5 0 00.75.64 8.77 8.77 0 003.14-6.91c0-5.45-6.66-10.69-6.94-10.91z" />
  </Icon>
);

export default HotIcon;
