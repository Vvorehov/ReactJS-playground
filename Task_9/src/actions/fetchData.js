import actionTypes from '../constants/actionsTypes';

// Action creator
export const fetchMoviesSuccess = (json, sortBy) => ({
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  sortBy,
  movies: json.data,
});

export const fetchMoviesSearchSuccess = (json, search) => ({
  type: actionTypes.FETCH_MOVIES_SEARCH_SUCCESS,
  searchData: search,
  movies: json.data,
});

export const fetchMoviesFail = error => ({
  type: actionTypes.FETCH_MOVIES_FAILED,
  error,
});

export const fetchMoviesStart = () => ({
  type: actionTypes.FETCH_MOVIES_START,
});

export const fetchFilmSuccess = json => ({
  type: actionTypes.FETCH_FILM_SUCCESS,
  film: json,
});

export const fetchFilmFail = error => ({
  type: actionTypes.FETCH_FILM_FAILED,
  error,
});

export const fetchFilmStart = () => ({
  type: actionTypes.FETCH_FILM_START,
});


// Action creator - fetch method async
export const getDataSorted = (sortedBy = 'release_date') => {
  const requestUrl = `http://react-cdp-api.herokuapp.com/movies?sortBy=${sortedBy}&sortOrder=desc`;

  return (dispatch) => {
    dispatch(fetchMoviesStart());
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => dispatch(fetchMoviesSuccess(json, sortedBy)))
      .catch(error => dispatch(fetchMoviesFail(error)));
  };
};

export const fetchSearchResults = (search, sortedBy = 'release_date') => {
  const sortData = `&sortBy=${sortedBy}`;
  const searchData = `&search=${search.searchQuery}&searchBy=${search.searchBy.toLowerCase()}`;
  const requestUrl = `http://react-cdp-api.herokuapp.com/movies?sortOrder=desc${sortData}${searchData}`;

  return (dispatch) => {
    dispatch(fetchMoviesStart());
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => dispatch(fetchMoviesSearchSuccess(json, search)))
      .catch(error => dispatch(fetchMoviesFail(error)));
  };
};

export const getFilmById = (filmId) => {
  const requestUrl = `http://react-cdp-api.herokuapp.com/movies/${filmId}`;
  return (dispatch) => {
    dispatch(fetchFilmStart());
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => dispatch(fetchFilmSuccess(json)))
      .catch(error => dispatch(fetchFilmFail(error)));
  };
};

