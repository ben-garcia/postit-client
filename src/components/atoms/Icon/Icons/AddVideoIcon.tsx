import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const AddVideoIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M18.493 6.151a.997.997 0 00-1.007.013L15 7.655V6c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2v-1.634l2.49 1.473a.997.997 0 001.006.008.999.999 0 00.504-.869V7.021a1 1 0 00-.507-.87" />
  </Icon>
);

export default AddVideoIcon;
