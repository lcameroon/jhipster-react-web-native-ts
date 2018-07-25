import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';

import reducer from '../reducers';

const initStore = (onCompletion: () => void): any => {
  const composedMiddlewares = compose(
    applyMiddleware(thunkMiddleware, promiseMiddleware())
  );

  const store = createStore(reducer, composedMiddlewares);
  persistStore(store, null, onCompletion);

  return store;
};

export default initStore;
