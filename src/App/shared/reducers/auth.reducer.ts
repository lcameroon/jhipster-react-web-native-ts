import { createSelector } from 'reselect';
import { ACTION_TYPES } from '../actions/auth.action';

import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';
import { IRootState } from '../../reducers';

const initialState = {
  isAuthenticated: false,
  user: {} as any,
  loading: false,
  loginSuccess: false,
  loginError: false, // Errors returned from server side
  showModalLogin: false,
  errorMessage: null, // Errors returned from server side
  redirectMessage: null
};

export type AuthenticationState = Readonly<typeof initialState>;

// Reducer
export default (
  state: AuthenticationState = initialState,
  action
): AuthenticationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.LOGIN):
    case REQUEST(ACTION_TYPES.GET_SESSION):
      return {
        ...state,
        loading: true
      };
    case FAILURE(ACTION_TYPES.LOGIN):
      return {
        ...initialState,
        errorMessage: action.payload,
        showModalLogin: true,
        loginError: true
      };
    case FAILURE(ACTION_TYPES.GET_SESSION):
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        showModalLogin: true,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.LOGIN):
      return {
        ...state,
        loading: false,
        loginError: false,
        showModalLogin: false,
        loginSuccess: true
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...initialState,
        showModalLogin: true
      };
    case SUCCESS(ACTION_TYPES.GET_SESSION): {
      const isAuthenticated =
        action.payload && action.payload.data && action.payload.data.activated;
      return {
        ...state,
        isAuthenticated,
        loading: false,
        user: action.payload.data
      };
    }
    case ACTION_TYPES.ERROR_MESSAGE:
      return {
        ...initialState,
        showModalLogin: true,
        redirectMessage: action.message
      };
    case ACTION_TYPES.CLEAR_AUTH:
      return {
        ...state,
        loading: false,
        showModalLogin: true,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

// Selectors
const getAuthenticationState = (state: IRootState) => state.authentication;

export const selectIsAuthenticated = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.isAuthenticated
);

export const selectAuthUser = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.user
);

export const selectUserAuthorities = createSelector(
  selectAuthUser,
  state => state.authorities
);

export const selectAuthLoading = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.loading
);

export const selectAuthLoginSuccess = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.loginSuccess
);

export const selectAuthLoginError = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.loginError
);

export const selectAuthShowModalLogin = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.showModalLogin
);

export const selectAuthErrorMessage = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.errorMessage
);

export const selectAuthRedirectMessage = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.redirectMessage
);
