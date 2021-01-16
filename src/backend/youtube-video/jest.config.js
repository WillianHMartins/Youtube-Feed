// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

'use strict';

const jestConfig = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The test environment that will be used for testing
  testEnvironment: 'node',
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/', '/config/'],
};

module.exports = jestConfig;
