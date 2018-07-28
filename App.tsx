import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import AppReducer from './src/App/reducers/index.native';
import AppWithNavigationState from './src/App/index.native';
import setupAxiosInterceptors from './src/App/shared/interceptors/axios.interceptor';
import loggerMiddleware from './src/App/shared/middlewares/logger.middleware';
import { navigationMiddleware } from './src/App/store/index.native';
import { clearAuthentication } from './src/App/shared/actions/auth.action';

const defaultMiddlewares = [
  thunkMiddleware,
  loggerMiddleware,
  promiseMiddleware()
];

const store = createStore(
  AppReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...defaultMiddlewares, navigationMiddleware)
);
const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('error.http.403'));

class NativeApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('NativeApp', () => NativeApp);

export default NativeApp;

// Disable the Yellow Box
console.ignoredYellowBox = ['Warning:'];
