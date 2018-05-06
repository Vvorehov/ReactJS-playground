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
  "roots": [
    "__tests__"
  ],
  "testRegex": ".*.test.js",
  "verbose": true
};