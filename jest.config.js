module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testPathIgnorePatterns: [
    '.next/',
    '/node_modules/',
    '<rootDir>/.storybook',
    '<rootDir>/setupTests.ts',
  ],
  moduleNameMapper: {
    '\\.scss': '<rootDir>/src/__mocks__/styles.ts',
    '\\.svg': '<rootDir>/src/__mocks__/svg.ts',
  },
};
