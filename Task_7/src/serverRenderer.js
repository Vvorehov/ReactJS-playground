import { renderToString } from 'react-dom/server'
import StaticRouter from 'react-router/StaticRouter'
import { ReduxAsyncConnect, loadOnServer, reducer as reduxAsyncConnect } from 'redux-connect'
import { parse as parseUrl } from 'url'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'
import { createStore, combineReducers } from 'redux'
const express = require('express');
import rootReducer from './reducers/reducer';

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
        <Provider store={store} key="provider">
          <StaticRouter location={location} context={context}>
            <ReduxAsyncConnect routes={routes} helpers={helpers} />
          </StaticRouter>
        </Provider>
      )

      // handle redirects
      if (context.url) {
        req.header('Location', context.url)
        return res.send(302)
      }

      // 3. render the Redux initial data into the server markup
      const html = createPage(appHTML, store)
      res.send(html)
    })
})

function createPage(html, store) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="app">${html}</div>
          <!-- its a Redux initial data -->
          <script type="text/javascript">
            window.__data=${serialize(store.getState())};
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}
