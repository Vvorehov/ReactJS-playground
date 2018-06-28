import React from "react";
import { render } from "react-dom";
import App from "./scenes/App/App";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {store, persistor} from './store.js';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {getDataSorted} from './actions/fetchData.js';
import HomePage from '../src/scenes/HomePage/HomePage';
import FilmPage from '../src/scenes/FilmPage/FilmPage';
import SearchPage from '../src/scenes/SearchPage/SearchPage';
import Page404 from '../src/scenes/Page404/Page404';

render(
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
  </Provider>,
  document.getElementById("container")
);