const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const common = require('./webpack.config.common');

console.log("!!!Server config!!!");

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: {
    index: './src/serverRenderer.js'
  },
  externals: [nodeExternals()],
  output: {
    path: path.resolve('./public'),
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        include: /src/,
        use: [
          {
            loader: 'css-loader/locals', // It doesn't embed CSS but only exports the identifier mappings.
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|png|svg|jpg)$/,
        loader: "file-loader?emitFile=false",
        options: {
          name: "[path][name].[ext]?[hash]"
        }
      }
    ],
  },
});