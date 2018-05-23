import actionTypes from '../constants/actionsTypes';

// Action creator - fetch method async
export const getDataSorted = (sortedBy = "release_date") => {
  dispatch(fetchMoviesStart());
  const requestUrl = 'http://react-cdp-api.herokuapp.com/movies?sortBy=' + sortedBy + '&sortOrder=desc';
  fetch(requestUrl)
    .then(response => response.json())
    .then(({data}) => {
      dispatch(fetchMoviesSuccess(data.data));
    })
    .catch(error => dispatch(fetchMoviesFail(error)));
};

export const getSearchData = (searchText, searchBy, sortedBy = "release_date") => {
  dispatch(fetchMoviesStart());
  const requestUrl = 'http://react-cdp-api.herokuapp.com/movies?sortBy' + sortedBy + '&sortOrder=desc&search=' + searchText + ' &searchBy=' + searchBy;
  fetch(requestUrl)
    .then(response => response.json())
    .then(({data}) => {
      dispatch(fetchMoviesSuccess(data.data));
    })
    .catch(error => dispatch(fetchMoviesFail(error)));
};

export const getFilmById = (filmId) => {
  dispatch(fetchFilmStart());
  const requestUrl = 'http://react-cdp-api.herokuapp.com/movies/' + filmId;
  fetch(requestUrl)
    .then(response => response.json())
    .then(({data}) => {
      dispatch(fetchFilmSuccess(data.data));
    })
    .catch(error => dispatch(fetchFilmFail(error)));
};

// Action creator
export const fetchMoviesSuccess = movies => {
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    movies
  }
};

export const fetchMoviesFail = error => {
  return {
    type: actionTypes.FETCH_MOVIES_FAILED,
    error
  }
};

export const fetchMoviesStart = () => {
  return {
    type: actionTypes.FETCH_MOVIES_START
  }
};

export const fetchFilmSuccess = movies => {
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    movies
  }
};

export const fetchFilmFail = error => {
  return {
    type: actionTypes.FETCH_MOVIES_FAILED,
    error
  }
};

export const fetchFilmStart = () => {
  return {
    type: actionTypes.FETCH_MOVIES_START
  }
};