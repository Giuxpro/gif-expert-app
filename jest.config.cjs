module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}