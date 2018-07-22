import { isPromise } from 'react-jhipster';

import appConstants from '../constants';

const getErrorMessage = errorData => {
  let message = errorData.message;
  if (errorData.fieldErrors) {
    errorData.fieldErrors.forEach(fErr => {
      message += `\n
          field: ${fErr.field},
          Object: ${fErr.objectName},
          message: ${fErr.message}
        \n`;
    });
  }
  return message;
};

export default () => next => action => {
  // If not a promise, continue on
  if (!isPromise(action.payload)) {
    return next(action);
  }

  /**
   *
   * The error middleware serves to dispatch the initial pending promise to
   * the promise middleware, but adds a `catch`.
   * It need not run in production
   */
  if (appConstants.isDev) {
    // Dispatch initial pending promise, but catch any errors
    return next(action).catch(error => {
      const errorMsg = JSON.stringify(error.message);
      console.error(`${action.type} caught at middleware with reason: ${errorMsg}.`);

      if (error && error.response && error.response.data) {
        const message = getErrorMessage(error.response.data);
        console.error(`Actual cause: ${message}`);
      }

      return Promise.reject(error);
    });
  }

  return next(action);
};
