import actionsTypes from '../constants/actionsTypes';
import initialState from './initialState.js';

export default function sortedBy(state = {}, action) {
  switch (action.type) {
    case actionsTypes.SORT_BY:
      console.log('sort_by');
      return {
        ...state,
        sortBy: action.sortBy,
      };
    default:
      console.log('default');
      return state;
  }
}
