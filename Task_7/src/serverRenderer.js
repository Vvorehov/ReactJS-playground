import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Root from './Root';
import {store, persistor} from './store';

function renderHTML(html, preloadedState) {
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
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    // This context object contains the results of the render
    const context = {};

    const root = (
      <Root
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
        persistor={persistor}
      />
    );
    console.log("context: " + {context} + "location " + {req} + " Router " + {StaticRouter} + " store: " + {store});

    const htmlString = renderToString(root);

    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));

    // Do first render, starts initial actions.
    renderToString(root);
    // When the first render is finished, send the END action to redux-saga.
    store.close();
  };
};