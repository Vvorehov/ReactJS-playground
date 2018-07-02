import actionsTypes from '../constants/actionsTypes';

export const setSearchData = searchData => ({
  type: actionsTypes.SEARCH_BY,
  searchData,
});

