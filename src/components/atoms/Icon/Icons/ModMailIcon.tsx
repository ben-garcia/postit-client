import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const ModMail: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M15 12c0 1.103-.897 2-2 2H7c-1.103 0-2-.897-2-2V8c0-.114.016-.224.033-.332l4.03 3.223a1.5 1.5 0 00.937.331c.331 0 .661-.111.938-.331l4.029-3.223c.017.108.033.218.033.332v4zM7 6h6a1.99 1.99 0 011.534.732l-4.221 3.377a.503.503 0 01-.625 0L5.466 6.732A1.99 1.99 0 017 6zm10.274-2.962l-7-2a1 1 0 00-.548 0l-7 2C2.296 3.161 2 3.554 2 4v7c0 5.688 7.41 7.871 7.726 7.962a1.012 1.012 0 00.548 0C10.59 18.871 18 16.688 18 11V4c0-.446-.296-.839-.726-.962z" />
  </Icon>
);

export default ModMail;
