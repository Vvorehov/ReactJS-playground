import { combineReducers } from 'redux';
import sortBy from "./sortBy";
import search from "./search";

export default combineReducers({
  sortData: sortBy,
  searchData: search
})