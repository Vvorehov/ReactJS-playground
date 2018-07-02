import { combineReducers } from 'redux';
import sortData from './sortBy';
import searchData from './search';
import filmList from './filmList';
import singleFilm from './singleFilm';
// import initialState from "./initialState";

export default combineReducers({
  filmList,
  sortData,
  searchData,
  singleFilm,
});

