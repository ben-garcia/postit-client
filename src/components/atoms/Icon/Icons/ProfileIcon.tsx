import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const ProfileIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path
      d="M15 15.5H5a.5.5 0 01-.5-.5 4.075 4.075 0 014.071-4.071h2.858A4.075 4.075 0 0115.5 15a.5.5 0 01-.5.5m-5-11a2.55 2.55 0 012.547 2.548A2.55 2.55 0 0110 9.595a2.55 2.55 0 01-2.547-2.547A2.55 2.55 0 0110 4.5M16 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2"
      fill="inherit"
    />
  </Icon>
);

export default ProfileIcon;
