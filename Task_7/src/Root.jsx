import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {store, persistor} from './store.js';
import {Provider, connect} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import App from "./scenes/App/App";
import HomePage from '../src/scenes/HomePage/HomePage';
import FilmPage from '../src/scenes/FilmPage/FilmPage';
import SearchPage from '../src/scenes/SearchPage/SearchPage';
import Page404 from '../src/scenes/Page404/Page404';

const Root = ({
                Router, location, context, store, persistor
              }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/film/:movieId" component={FilmPage}/>
            <Route path="/search/:searchBy/:searchQuery" component={SearchPage}/>
            <Route path="*" component={Page404}/>
          </Switch>
        </App>
      </Router>
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};
Root.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(Root);