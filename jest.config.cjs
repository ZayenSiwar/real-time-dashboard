// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/test/mocks/fileMock.js',
    '^react-leaflet$': '<rootDir>/src/test/mocks/reactLeafletMock.js',
    '^@react-leaflet/core$': '<rootDir>/src/test/mocks/reactLeafletCoreMock.js',
    '^leaflet$': '<rootDir>/src/test/mocks/leafletMock.js',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-leaflet|@react-leaflet)/)',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
};
