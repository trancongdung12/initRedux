import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persist from './persist';
import {allReducers} from './reducers';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      ignoredActionPaths: [],
    },
  }),
];

if (__DEV__) {
  middleware.push(logger);
}

const persistWraperReducer = persistReducer(persist, allReducers);

export const store = configureStore({
  reducer: persistWraperReducer,
  middleware,
});

export const persistor = persistStore(store);
