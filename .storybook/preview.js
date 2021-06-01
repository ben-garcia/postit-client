import React from 'react';

import { SupernovaProvider } from 'supernova-ui';

import '../src/sass/main.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
};

const theme = {
  colors: {
    brandBlack100: '#1c1c1c',
    brandBlack200: '#030303',
    brandBlue100: '#0079d3',
    brandBlue200: '#5a75cc',
    brandBlue300: '#33a8ff',
    brandGold500: '#ddbd37',
    brandGrey100: 'rgba(26, 26, 27, 0.1)',
    brandGrey200: '#878a8c',
    brandGrey300: '#1a1a1b',
    brandOrange100: '#ff4500',
    brandOrange500: '#cc3700',
    brandRed100: '#ff0000',
    brandRed200: '#ea0027',
    brandRed300: '#ff585b',
  },
  typography: {
    fonts: {
      heading: 'IBMPlexSans, Arial, sans-serif',
      body: 'NotoSans, Arial, sans-serif',
    },
  },
};

export const decorators = [
  Story => (
    <SupernovaProvider theme={theme}>
      <Story />
    </SupernovaProvider>
  ),
];
