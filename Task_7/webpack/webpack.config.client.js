const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.config.common');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  devtool: isDevMod ? "eval" : "source-map",

  devServer: {
    port: 8080,
    inline: true,
    contentBase: './',
    historyApiFallback: true
  },

  entry: [
    isDevMod && 'webpack-hot-middleware/client',
    './src/index.js',
  ].filter(Boolean),

  output: {
    path: path.resolve('./public'),
    filename: 'js/bundle.js',
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" },
      {
        test: /\.(sass|scss)$/,
        include: /src/,
        use: [
          isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
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
      // {
      // 	test: /\.(ttf|eot|svg|woff|png|svg|jpg)$/,
      // 	loader: "file-loader",
      // 	options: {
      // 		name: "[path][name].[ext]?[hash]"
      // 	}
      // },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ],
  },

  plugins: [
    !isDevMod && new CleanWebpackPlugin('./public', {root: path.resolve(__dirname, '../')}),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    /**
     * This plugin extract CSS into separate files.
     * It creates a CSS file per JS file which contains CSS.
     * It supports On-Demand-Loading of CSS and SourceMaps.
     * @link https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
     */
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ].filter(Boolean),

  optimization: {
    minimize: !isDevMod,
    minimizer: !isDevMod ? [new UglifyJsPlugin()] : []
  }
});
