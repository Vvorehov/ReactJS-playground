/*
import { actionTypes } from './actionsTypes.js';
import { createStore } from 'redux';


const fetchMoviesSuccess = movies => {
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    movies
  }
};

const fetchMoviesFail = error => {
  return {
    type: actionTypes.FETCH_MOVIES_FAILED,
    error
  }
};

const fetchMoviesStart = () => {
  return {
    type: actionTypes.FETCH_MOVIES_START
  }
};

const fetchMovies = () => dispatch => {
  dispatch(fetchMoviesStart());
  fetch('//react-cdp-api.herokuapp.com/movies')
    .then(response => response.json())
    .then(({data}) => {
      const movies = [];
      for (let key in data) {
        movies.push({
          ...data[key],
          id: key
        })
      }
      dispatch(fetchMoviesSuccess(movies));
    })
    .catch(error => dispatch(fetchMoviesFail(error)));
};

const store = createStore(fetchMoviesSuccess(movies));

console.log(store.getState());

export {
  fetchMovies,
  store
}*/
