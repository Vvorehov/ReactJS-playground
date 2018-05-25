import React from "react";
import { render } from "react-dom";
import App from "./scenes/App/App";
/*import { FilmPage } from "./scenes/FilmPage";*/
import { createStore, applyMiddleware  } from 'redux'
import rootReducer from './reducers/reducer';
import { sortByAction } from './actions/sortBy';
import * as FilmActions from './actions/fetchData';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';



const store = createStore(rootReducer, applyMiddleware(thunk));

/*console.log(store.getState());

store.dispatch(sortByAction("release_date"));

store.dispatch(FilmActions.fetchMoviesSuccess());

console.log(store.getState());*/


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container")
);



