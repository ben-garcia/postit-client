import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const ThinPencilIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M14.55 2.587l1.863 1.863a1.34 1.34 0 010 1.894l-1.64 1.64a.445.445 0 01-.631 0l-3.126-3.126a.447.447 0 010-.631l1.64-1.64a1.34 1.34 0 011.894 0zM9.753 5.49a.447.447 0 01.631 0l3.126 3.126a.447.447 0 010 .631l-7.63 7.63a.445.445 0 01-.315.13H2.44a.446.446 0 01-.446-.446v-3.126c0-.118.046-.232.13-.316l7.63-7.63z" />
  </Icon>
);

export default ThinPencilIcon;
