import actionsTypes from '../constants/actionsTypes';

export default (state = {movies: []}, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_MOVIES_SUCCESS:
      console.log('fetch movies success');
      return {
        ...state,
        movies: action.movies
      };
    case actionsTypes.FETCH_MOVIES_SEARCH_SUCCESS:
      console.log('fetch movies search success');
      return {
        ...state,
        movies: action.movies
      };
    case actionsTypes.FETCH_MOVIES_START:
      if (state.movies !== []) {
        return {
          ...state
        }
      }
    default:
      return state;
  }
};
