module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/dist/**/*.js'],
  coverageDirectory: '__tests__/coverage',
  coverageReporters: ['text', 'lcov'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  // transform: {
  //   '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  // },
  // transform: {
  //   '^.+\\.ts?$': 'ts-jest',
  // },
};
