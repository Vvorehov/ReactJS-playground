import { createStore } from 'redux';
import rootReducer from './reducers/reducer';
import { sortByAction } from './actions/sortBy';
import { fetchMoviesSuccess, getDataSorted } from './actions/fetchData';

const data = getDataSorted("release_date");
const store = createStore(rootReducer);
console.log('data: ' + data);
console.log('before dispatch: ' + store.getState());
store.dispatch(sortByAction("release_date"));

store.dispatch(fetchMoviesSuccess());

console.log('after dispatch: ' + store.getState());