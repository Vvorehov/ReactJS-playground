import actionsTypes from '../constants/actionsTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionsTypes.SEARCH_BY:
      console.log('Search_by');
      return {
        ...state,
        ...action.searchData,
      };
    default:
      console.log('default');
      return state;
  }
};
