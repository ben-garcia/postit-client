import React from 'react';

import { SupernovaProvider } from 'supernova-ui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  Story => (
    <SupernovaProvider>
      <Story />
    </SupernovaProvider>
  ),
];
