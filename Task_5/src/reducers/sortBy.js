import actionsTypes from '../constants/actionsTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case actionsTypes.SORT_BY:
      return {
        ...state,
        sortBy: action.sortBy
      };
    case actionsTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies
      };
    default:
      return state;
  }
}