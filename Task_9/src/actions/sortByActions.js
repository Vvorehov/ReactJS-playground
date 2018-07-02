import actionsTypes from '../constants/actionsTypes';

export const sortByAction = sortByString => ({
  type: actionsTypes.SORT_BY,
  sortBy: sortByString,
});

