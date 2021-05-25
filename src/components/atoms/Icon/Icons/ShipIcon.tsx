import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const ShipIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M15 9.9V8A5 5 0 005 8v1.9c-2.41.45-4 1.24-4 2.13 0 1.41 4 2.56 9 2.56s9-1.15 9-2.56c0-.89-1.59-1.68-4-2.13zm-2 .94a9.62 9.62 0 01-3 .39 9.62 9.62 0 01-3-.39V8a3 3 0 016 0zM2.74 14.6l3 2.12a7.39 7.39 0 008.6 0l3-2.12a24.63 24.63 0 01-7.26 1 24.63 24.63 0 01-7.34-1z" />
    <circle cx="16" cy="4" r="4" fill="none" />
    <circle cx="16" cy="4" r="3" fill="none" />
  </Icon>
);

export default ShipIcon;
