import React from "react";
import { render } from "react-dom";
import { App } from "./scenes/App";
import { createStore } from 'redux';
import rootReducer from './reducers/reducer';
/*import { FilmPage } from "./scenes/FilmPage";*/
import { sortByAction } from './actions/sortBy';
import { fetchMoviesSuccess, getDataSorted } from './actions/fetchData';

const mockData = [{id: 1},{id: 2},{id: 3}];

const store = createStore(rootReducer);

console.log(store.getState());
store.dispatch(sortByAction("release_date"));


store.dispatch(fetchMoviesSuccess(getDataSorted()));

console.log(store.getState());
render(
    <App />,
    document.getElementById("container")
);