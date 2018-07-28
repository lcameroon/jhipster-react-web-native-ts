import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { loadingBarMiddleware } from 'react-redux-loading-bar';

import appConstants from '../shared/constants';
import reducer, { IRootState } from '../reducers';
import DevTools from '../shared/helpers/devtools.helper';
// Middlewares
import errorMiddleware from '../shared/middlewares/error.middleware';
import loggerMiddleware from '../shared/middlewares/logger.middleware';
import notificationMiddleware from '../shared/middlewares/notification.middleware';

const defaultMiddlewares = [
  thunkMiddleware,
  errorMiddleware,
  loggerMiddleware,
  notificationMiddleware,
  promiseMiddleware(),
  loadingBarMiddleware()
];

const composedMiddlewares = middlewares =>
  appConstants.isDev
    ? compose(
        applyMiddleware(...defaultMiddlewares, ...middlewares),
        DevTools.instrument()
      )
    : compose(applyMiddleware(...defaultMiddlewares, ...middlewares));

const initStore = (initialState?: IRootState | any, middlewares = []) =>
  createStore(reducer, initialState, composedMiddlewares(middlewares));

export default initStore;
