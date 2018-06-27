import React from "react";
import BrowserRouter from 'react-router-dom/BrowserRouter'
import renderRoutes from 'react-router-config/renderRoutes';
import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-connect';
import { hydrate } from 'react-dom';
import {PersistGate} from 'redux-persist/integration/react';
import { createStore, combineReducers } from 'redux';
import { persistor} from './store.js';
import rootReducer from './reducers/reducer';

import App from "./scenes/App/App";
import HomePage from '../src/scenes/HomePage/HomePage';
import FilmPage from '../src/scenes/FilmPage/FilmPage';
import SearchPage from '../src/scenes/SearchPage/SearchPage';
import Page404 from '../src/scenes/Page404/Page404';

asyncConnect([{
  key: 'root',
  promise: ({ match: { params }, helpers }) => Promise.resolve(storage)
}])

const routes = [{
  path: '/',
  component: App,
  routes: [{
    path: '/',
    exact: true,
    component: HomePage,
  },{
    path: '/film/:movieId',
    exact: false,
    component: FilmPage,
  },{
    path: '/search/:searchBy/:searchQuery',
    exact: false,
    component: SearchPage,
  },{
    path: '*',
    exact: false,
    component: Page404,
  }]
}];

// Connect redux async reducer
const store = createStore(combineReducers({ reduxAsyncConnect, rootReducer }), window.__data);

hydrate(
  <Provider store={store} key="provider">
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ReduxAsyncConnect routes={routes} helpers={helpers} />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('container')
);
