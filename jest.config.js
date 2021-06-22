module.exports = {
  // what files to include or exclude in the coverage report(regardless of test files)
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.stories.tsx',
    '!src/theme/**/*',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/*test.(ts|tsx)'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
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
