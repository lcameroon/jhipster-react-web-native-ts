import axios from 'axios';
import Storage from '../utils/storage';

import appConstants from '../constants';

export const ACTION_TYPES = {
  LOGIN: 'authentication/LOGIN',
  GET_SESSION: 'authentication/GET_SESSION',
  LOGOUT: 'authentication/LOGOUT',
  CLEAR_AUTH: 'authentication/CLEAR_AUTH',
  ERROR_MESSAGE: 'authentication/ERROR_MESSAGE'
};

export const displayAuthError = message => ({
  type: ACTION_TYPES.ERROR_MESSAGE,
  message
});

export const getSession = () => dispatch =>
  dispatch({
    type: ACTION_TYPES.GET_SESSION,
    payload: axios.get('api/account')
  });

export const login = (username, password, rememberMe = false) => async (
  dispatch,
  getState
) => {
  const result = await dispatch({
    type: ACTION_TYPES.LOGIN,
    payload: axios.post('api/authenticate', { username, password, rememberMe })
  });
  // Alternative: get bearerToken from the header e.g:
  // const jwt = result.value.headers.authorization;
  // const bearerToken = jwt.slice(7, jwt.length);
  const bearerToken = result.value.data && result.value.data.id_token;

  if (bearerToken) {
    Storage.set(appConstants.tokenKey, bearerToken);
  }
  dispatch(getSession());
};

export const clearAuthToken = () => {
  Storage.get(appConstants.tokenKey).then(token => {
    if (token) {
      Storage.remove(appConstants.tokenKey);
    }
  });
};

export const logout = () => dispatch => {
  clearAuthToken();
  dispatch({
    type: ACTION_TYPES.LOGOUT
  });
};

export const clearAuthentication = messageKey => (dispatch, getState) => {
  clearAuthToken();
  dispatch(displayAuthError(messageKey));
  dispatch({
    type: ACTION_TYPES.CLEAR_AUTH
  });
};
