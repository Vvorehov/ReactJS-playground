import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';
import configureStore from './store';

import 'bootstrap/dist/css/bootstrap-grid.css';
//import './assets/styles/style.scss';

const store = configureStore(window.PRELOADED_STATE);

const root = (
  <Root
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(root, document.getElementById('container'));