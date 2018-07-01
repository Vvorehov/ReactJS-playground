const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const webpackConfig = require('../webpack');

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    serverSideRender: true
  }));
  app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler, { chunkName: 'index' }));

  /*compiler.watch({}, (err, stats) => {
    if (err) throw err
    stats = stats.toJson()
    if (stats.errors.length) return

    update()
  })*/
} else {
  const serverRenderer = require('../public/js/serverRenderer.js').default;

  app.use(express.static('public'));
  app.use(serverRenderer());
}

module.exports = app;