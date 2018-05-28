import actionsTypes from '../constants/actionsTypes';

export const sortByAction = sortByString => {
  return {
    type: actionsTypes.SORT_BY,
    sortBy: sortByString
  }
};

