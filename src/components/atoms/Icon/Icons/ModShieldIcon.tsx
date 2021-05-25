import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const ModShieldIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M1.88 3.32V9a11.53 11.53 0 008 11h.2a11.53 11.53 0 008-11V3.32A11.57 11.57 0 0110 0a11.57 11.57 0 01-8.12 3.32" />
    <circle cx="18" cy="3" r="5" fill="none" />
    <circle cx="18" cy="3" r="4" fill="none" />
  </Icon>
);

export default ModShieldIcon;
