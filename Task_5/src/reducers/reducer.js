import { createStore } from 'redux';
import actionsTypes from '../constants/actionsTypes';

const getFilms = () => {
  fetch('//react-cdp-api.herokuapp.com/movies')
    .then(response => response.json())
    .then(data => {
      store.dispatch({type: actionsTypes.FETCH_MOVIES_SUCCESS, films: data});
    })
    .catch(err => store.dispatch({type: actionsTypes.FETCH_MOVIES_FAILED}));
};

getFilms();

const rootReducer = (store, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_MOVIES_SUCCESS:
      return {...store, films: action.films};
    case actionsTypes.FETCH_MOVIES_FAILED:
      return store;
    default:
      return store;
  }
};

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});