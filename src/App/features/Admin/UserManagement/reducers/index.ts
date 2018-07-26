import { createSelector } from 'reselect';
import { REQUEST, SUCCESS, FAILURE } from '../../../../shared/utils/action-type.util';
import { ACTION_TYPES } from '../actions';
import { IUser, defaultValue } from '../models/user.model';
import { IRootState } from '../../../../reducers';

const initialState = {
  loading: false,
  errorMessage: null,
  users: [] as ReadonlyArray<IUser>,
  authorities: [] as any[],
  user: defaultValue,
  updating: false,
  updateSuccess: false,
  totalItems: 0
};

export type UserManagementState = Readonly<typeof initialState>;

// Reducer
export default (
  state: UserManagementState = initialState,
  action
): UserManagementState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ROLES):
      return {
        ...state
      };
    case REQUEST(ACTION_TYPES.FETCH_USERS):
    case REQUEST(ACTION_TYPES.FETCH_USER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_USER):
    case REQUEST(ACTION_TYPES.UPDATE_USER):
    case REQUEST(ACTION_TYPES.DELETE_USER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_USERS):
    case FAILURE(ACTION_TYPES.FETCH_USER):
    case FAILURE(ACTION_TYPES.FETCH_ROLES):
    case FAILURE(ACTION_TYPES.CREATE_USER):
    case FAILURE(ACTION_TYPES.UPDATE_USER):
    case FAILURE(ACTION_TYPES.DELETE_USER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_ROLES):
      return {
        ...state,
        loading: false,
        authorities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_USERS):
      return {
        ...state,
        loading: false,
        users: action.payload.data,
        totalItems: action.payload.headers['x-total-count']
      };
    case SUCCESS(ACTION_TYPES.FETCH_USER):
      return {
        ...state,
        loading: false,
        user: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_USER):
    case SUCCESS(ACTION_TYPES.UPDATE_USER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        user: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_USER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        user: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...state,
        user: {}
      };
    default:
      return state;
  }
};

// Selectors
const getUserManagementState = (state: IRootState) => state.admin.userManagement;

export const selectUserManagementLoading = createSelector(
  getUserManagementState,
  (state: UserManagementState) => state.loading
);

export const selectUserManagementErrorMessage = createSelector(
  getUserManagementState,
  (state: UserManagementState) => state.errorMessage
);

export const selectUserManagementUsers = createSelector(
  getUserManagementState,
  (state: UserManagementState) => state.users
);

export const selectUserManagementAuthorities = createSelector(
  getUserManagementState,
  (state: UserManagementState) => state.authorities
);

export const selectUserManagementUser = createSelector(
  getUserManagementState,
  (state: UserManagementState) => state.user
);

export const selectUserManagementUpdating = createSelector(
  getUserManagementState,
  (state: UserManagementState) => state.updating
);

export const selectUserManagementUpdateSuccess = createSelector(
  getUserManagementState,
  (state: UserManagementState) => state.updateSuccess
);

export const selectUserManagementTotalItems = createSelector(
  getUserManagementState,
  (state: UserManagementState) => state.totalItems
);
