import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';

import reducer from '../reducers';

export default function configureStore(onCompletion: () => void): any {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: 'superApp',
      realtime: true
    })
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, null, onCompletion);

  return store;
}
