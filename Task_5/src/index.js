import React from "react";
import { render } from "react-dom";
import App from "./scenes/App/App";
/*import { FilmPage } from "./scenes/FilmPage";*/
import { createStore, applyMiddleware, compose  } from 'redux'
import {store, persistor} from './store.js';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {getDataSorted} from './actions/fetchData.js';

store.dispatch(getDataSorted());

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("container")
);