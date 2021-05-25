import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const SpoilerIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M10 1.5a8.5 8.5 0 108.5 8.5A8.51 8.51 0 0010 1.5zm.71 13l-.15.12-.18.1-.18.05a.73.73 0 01-.2 0 1 1 0 01-.71-.29 1 1 0 01-.21-.32 1 1 0 01-.08-.33 1 1 0 01.08-.38 1 1 0 01.21-.32 1 1 0 01.91-.28l.18.06.18.09.15.13a1 1 0 01.29.7 1 1 0 01-.29.71zm-.22-3.6a.5.5 0 01-1 0l-1-4.67A.5.5 0 019 5.67h2a.5.5 0 01.49.6z" />
  </Icon>
);

export default SpoilerIcon;
