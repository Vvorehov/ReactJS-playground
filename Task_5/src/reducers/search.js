import actionsTypes from '../constants/actionsTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case actionsTypes.SEARCH_BY:
      return {
        ...state,
        ...action.searchBy
      };
    default:
      return state;
  }
}