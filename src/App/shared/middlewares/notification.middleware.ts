import { isPromise } from 'react-jhipster';
import { toast } from 'react-toastify';

const addErrorAlert = message => {
  toast.error(message);
};
export default () => next => action => {
  // If not a promise, continue on
  if (!isPromise(action.payload)) {
    return next(action);
  }

  /**
   *
   * The notification middleware serves to dispatch the initial pending promise to
   * the promise middleware, but adds a `then` and `catch.
   */
  return next(action)
    .then(response => {
      if (action.meta && action.meta.successMessage) {
        toast.success(action.meta.successMessage);
      } else if (
        response &&
        response.action &&
        response.action.payload &&
        response.action.payload.headers
      ) {
        const headers = response.action.payload.headers;
        let alert = null;
        let alertParams = null;
        Object.entries(headers).forEach(([k, v]: [string, string]) => {
          if (k.endsWith('app-alert')) {
            alert = v;
          } else if (k.endsWith('app-params')) {
            alertParams = v;
          }
        });
        if (alert) {
          toast.success(alert + alertParams);
        }
      }
      return Promise.resolve(response);
    })
    .catch(error => {
      if (action.meta && action.meta.errorMessage) {
        toast.error(action.meta.errorMessage);
      } else if (error && error.response) {
        const response = error.response;
        const data = response.data;
        // const hasApiAccount = (data && data.path && data.path.includes('/api/account'));
        const hasApiAccount = !!(
          data &&
          data.config &&
          data.config.includes('/api/account')
        );

        if (!(response.status === 401 && (error.message === '' || !hasApiAccount))) {
          let i;
          switch (response.status) {
            // connection refused, server not reachable
            case 0:
              addErrorAlert('Server not reachable');
              break;

            case 400:
              const headers = Object.entries(response.headers);
              let errorHeader;
              let entityKey;
              headers.forEach(([k, v]: [string, string]) => {
                if (k.endsWith('app-error')) {
                  errorHeader = v;
                } else if (k.endsWith('app-params') && !entityKey) {
                  entityKey = v;
                }
              });
              if (errorHeader) {
                addErrorAlert(errorHeader);
              } else if (data !== '' && data.fieldErrors) {
                const fieldErrors = data.fieldErrors;
                for (i = 0; i < fieldErrors.length; i++) {
                  const fieldError = fieldErrors[i];
                  addErrorAlert(`Error on field "${fieldError}"`);
                }
              } else if (data !== '' && data.message) {
                addErrorAlert(data.message);
              } else {
                addErrorAlert(data);
              }
              break;

            case 404:
              addErrorAlert('Not found');
              break;

            default:
              if (data !== '' && data.message) {
                addErrorAlert(data.message);
              } else {
                addErrorAlert(data);
              }
          }
        }
      } else if (error && error.message) {
        toast.error(error.message);
      } else {
        toast.error('Unknown error!');
      }
      return Promise.reject(error);
    });
};
