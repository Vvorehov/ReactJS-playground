import actionsTypes from '../constants/actionsTypes'

export default function searchData(state = {}, action) {
  switch (action.type) {
    case actionsTypes.SEARCH_BY:
      console.log('sort_by');
      return {
        ...state,
        searchBy: action.searchBy
      };
    default:
      console.log('default');
      return state;
  }
}