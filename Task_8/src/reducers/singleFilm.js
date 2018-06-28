import actionsTypes from '../constants/actionsTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_FILM_SUCCESS:
      console.log('fetch film success');
      return {
        ...state,
        ...action.film,
        ...action.film.genres
      };
    default:
      return state;
  }
};