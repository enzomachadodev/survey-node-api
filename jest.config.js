/** @type {import('jest').Config} */
const config = {
  roots: [
    '<rootDir>/src'
  ],
  collectCoverageFrom: undefined,
  coverageDirectory: undefined,
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

module.exports = config
