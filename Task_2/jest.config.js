module.exports = {
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
    "./tests"
  ],
  "testRegex": ".*.test.js",
  "verbose": true

}