import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import initialState from './reducers/initialState.js';

const middlewares = [thunk];

const persistConfig = {
  key: 'root',
  storage,
};

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {

  if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);



export const persistor = persistStore(store);
