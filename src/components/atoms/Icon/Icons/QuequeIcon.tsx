import React, { FC } from 'react';

import Icon, { IconProps } from '..';

const QuequeIcon: FC<IconProps> = props => (
  <Icon {...props} viewBox="0 0 20 20">
    <path d="M6.016 4.016h9.477c.176 0 .344.03.507.073v-1.09a1 1 0 00-1-1H3a1 1 0 00-1 1v12a1 1 0 001 1h1.089a1.977 1.977 0 01-.073-.506V6.016a2 2 0 012-2M17 5a1 1 0 011 1v11a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h11zm-1.5 7V8.5a.498.498 0 00-.362-.48l-3.5-1a.498.498 0 00-.276 0l-3.5 1a.498.498 0 00-.362.48V12c0 2.845 3.705 3.936 3.862 3.98a.5.5 0 00.276 0c.157-.044 3.862-1.135 3.862-3.98z" />
  </Icon>
);

export default QuequeIcon;
