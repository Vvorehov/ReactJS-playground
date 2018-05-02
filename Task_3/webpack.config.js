const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebPackCleanPlugin = require('webpack-clean-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const webpackCleanPlugin = new WebPackCleanPlugin({
  on: "emit",
  path: ["dist"]
});

const uglifyJsPlugin = new UglifyJsPlugin({
  test: /\.js($|\?)/i,
  cache: "dist/cache",
  parallel: 4,
  sourceMap: true
});



module.exports = (env) => {
  const isProduction = env.NODE_ENV == "production";
  let config = {
    entry: "./src/index.js",
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [webpackCleanPlugin, htmlWebpackPlugin],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {}
          }
        }
      ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devtool: isProduction ? "inline-source-map" : "eval",
    optimization: {
      minimize: isProduction,
      minimizer: isProduction ? [uglifyJsPlugin] : []
    }
  };
  return config;
};

