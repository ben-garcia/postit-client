module.exports = {
	addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
  ],
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/stories.@(js|jsx|ts|tsx)',
  ],
  
};
