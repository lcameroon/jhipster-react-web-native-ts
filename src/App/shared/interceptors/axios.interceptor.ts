import axios from 'axios';
import Storage from '../utils/storage';

import appConstants from '../constants';

const TIMEOUT = 1000000; // 10000
const setupAxiosInterceptors = onUnauthenticated => {
  const onRequestSuccess = config => {
    return Storage.get(appConstants.tokenKey).then(token => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      config.timeout = TIMEOUT;
      config.url = `${appConstants.serverApiUrl}${config.url}`;

      return config;
    });
  };

  const onResponseSuccess = response => response;

  const onResponseError = err => {
    const status = err.status || err.response.status;
    if (status === 403 || status === 401) {
      onUnauthenticated();
    }

    return Promise.reject(err);
  };

  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
