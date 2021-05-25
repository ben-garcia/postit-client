import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const ModModeIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M10 8C8.619 8 7.5 9.5 7.5 9.5S8.619 11 10 11s2.5-1.5 2.5-1.5S11.381 8 10 8m5.134 6H4.866a.5.5 0 01-.433-.75l5.135-8.893a.5.5 0 01.865 0l5.135 8.893a.5.5 0 01-.434.75m2.14-10.962l-7-2a1.004 1.004 0 00-.548 0l-7 2C2.296 3.161 2 3.554 2 4v7c0 5.688 7.41 7.871 7.726 7.962a1.018 1.018 0 00.549 0C10.59 18.871 18 16.688 18 11V4c0-.446-.296-.839-.725-.962" />
  </Icon>
);

export default ModModeIcon;
