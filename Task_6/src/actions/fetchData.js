import actionTypes from '../constants/actionsTypes';

// Action creator - fetch method async
export const getDataSorted = (sortedBy = "release_date") => {
  let requestUrl = 'http://react-cdp-api.herokuapp.com/movies?sortBy=' + sortedBy + '&sortOrder=desc';
  console.log('Get data sorted');
  return dispatch => {
    dispatch(fetchMoviesStart());
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => dispatch(fetchMoviesSuccess(json, sortedBy)))
      .catch(error => dispatch(fetchMoviesFail(error)));
  }
};

export const fetchSearchResults = (search, sortedBy = "release_date") => {
  let sortData = '&sortBy=' + sortedBy;
  let searchData = '&search=' + search.searchQuery + '&searchBy=' + search.searchBy.toLowerCase();
  //let requestUrl = 'http://react-cdp-api.herokuapp.com/movies?search=' + search.searchQuery + '&searchBy=' + search.searchBy.toLowerCase();
  let requestUrl = 'http://react-cdp-api.herokuapp.com/movies?sortOrder=desc' + sortData + searchData;
  console.log('Get search data');
  return dispatch => {
    dispatch(fetchMoviesStart());
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => dispatch(fetchMoviesSearchSuccess(json, search)))
      .catch(error => dispatch(fetchMoviesFail(error)));
  }
};

export const getFilmById = (filmId) => {
  const requestUrl = 'http://react-cdp-api.herokuapp.com/movies/' + filmId;
  return dispatch => {
    dispatch(fetchFilmStart());
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => dispatch(fetchFilmSuccess(json)))
      .catch(error => dispatch(fetchFilmFail(error)));
  }
};

// Action creator
export const fetchMoviesSuccess = (json, sortBy) => {
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    sortBy: sortBy,
    movies: json.data
  }
};

export const fetchMoviesSearchSuccess = (json, search) => {
  return {
    type: actionTypes.FETCH_MOVIES_SEARCH_SUCCESS,
    searchData: search,
    movies: json.data
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

export const fetchFilmSuccess = json => {
  return {
    type: actionTypes.FETCH_FILM_SUCCESS,
    film: json
  }
};

export const fetchFilmFail = error => {
  return {
    type: actionTypes.FETCH_FILM_FAILED,
    error
  }
};

export const fetchFilmStart = () => {
  return {
    type: actionTypes.FETCH_FILM_START
  }
};