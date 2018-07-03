import React from 'react';
import {renderToString} from 'react-dom/server';
import Root from './Root';

function renderHTML(html) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>Server Side Rendering </title>
           ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
        <h2>ServerRenderer.js</h2>
          <div id="container">${html}</div>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

module.exports = (req, res) => {

  const root = (
    <Root />
  );
  const htmlString = renderToString(root);
  res.send(renderHTML(htmlString));
};

/*
import React from 'react';
import {renderToString} from 'react-dom/server';
import Root from './Root';
import rootReducer from "../src/reducers/reducer";
const express = require('express');
const app = express();


app.get('*', (req, res) => {
  const store = createStore(combineReducers({ reduxAsyncConnect, rootReducer }))
  const url = req.originalUrl || req.url
  const location = parseUrl(url)

  // 1. load data
  loadOnServer({ store, location, routes, helpers })
    .then(() => {
      const context = {}

      // 2. use `ReduxAsyncConnect` to render component tree
      const appHTML = renderToString(
        <Root/>
      )

      // handle redirects
      if (context.url) {
        req.header('Location', context.url)
        return res.send(302)
      }

      // 3. render the Redux initial data into the server markup
      const html = renderHTML(appHTML, store)
      res.send(html)
    })
})

function renderHTML(html, store) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>Server Side Rendering </title>
           ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
        <h2>ServerRenderer.js</h2>
          <div id="container">${html}</div>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}



*/
