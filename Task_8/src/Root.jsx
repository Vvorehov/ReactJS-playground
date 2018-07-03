import 'isomorphic-fetch';
import 'babel-polyfill';
import React from "react";
import { hot } from 'react-hot-loader';
import { render } from "react-dom";
import App from "./scenes/App/App";

import { StaticRouter, Route, Switch } from 'react-router-dom';
import {store, persistor} from './store.js';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import HomePage from '../src/scenes/HomePage/HomePage';
import FilmPage from '../src/scenes/FilmPage/FilmPage';
import SearchPage from '../src/scenes/SearchPage/SearchPage';
import Page404 from '../src/scenes/Page404/Page404';

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StaticRouter>
        <App>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/film/:movieId" component={FilmPage}/>
            <Route path="/search/:searchBy/:searchQuery" component={SearchPage}/>
            <Route path="*" component={Page404}/>
          </Switch>
        </App>
      </StaticRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("container")
);

export default hot(module)(Root);