module.exports = {
  "setupFiles": ["./jest.setup.js"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "automock": false,
  "browser": true,
  "moduleFileExtensions": [
    "js",
    "jsx"
  ],
  "moduleDirectories": [
    "node_modules"
  ],
  "transformIgnorePatterns": [
    "node_modules/(?!(jest-)?react-native|react-navigation)"
  ],
  "testMatch": [ '**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)' ],
  "verbose": true
};