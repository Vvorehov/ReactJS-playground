import actionsTypes from '../constants/actionsTypes';

export const setSearchData = (searchData) => {
  return {
    type: actionsTypes.SEARCH_BY,
    searchData
  }
};

