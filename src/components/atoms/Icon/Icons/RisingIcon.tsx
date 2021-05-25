import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const RisingIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M12.5 3.5H20V11l-2.5-2.5-6.25 6.25L7.5 11l-5 5L0 13.5 7.5 6l3.75 3.75L15 6z" />
  </Icon>
);

export default RisingIcon;
