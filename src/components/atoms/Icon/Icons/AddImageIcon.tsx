import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const AddImageIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M16 2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm0 14h-5.86a.49.49 0 01.05-.48l3.15-4.26a.5.5 0 01.38-.2.53.53 0 01.4.17L16 13.35zM4 13.51l3.26-4.69a.54.54 0 01.42-.21.5.5 0 01.41.23l2.85 4.34L8.84 16H4zm10.4-7.1a1.7 1.7 0 11-1.7-1.7 1.7 1.7 0 011.7 1.7z" />
  </Icon>
);

export default AddImageIcon;
