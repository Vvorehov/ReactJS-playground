import rootReducer from './reducers/reducer';
import { createStore, combineReducers, applyMiddleware, compose  } from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import { Provider } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-connect';

asyncConnect([{
  key: 'root',
  promise: ({ match: { params }, helpers }) => Promise.resolve(storage)
}])


export const persistor = persistStore(store);