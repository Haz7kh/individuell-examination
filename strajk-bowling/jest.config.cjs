module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(msw)/)', 
  ],
  moduleFileExtensions: ['js', 'jsx'],
};
