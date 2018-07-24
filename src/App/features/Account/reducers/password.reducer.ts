import { createSelector } from 'reselect';
import { ACTION_TYPES } from '../actions/password.action';

import { REQUEST, SUCCESS, FAILURE } from '../../../shared/utils/action-type.util';
import { IRootState } from '../../../reducers';

const initialState = {
  loading: false,
  errorMessage: null,
  updateSuccess: false,
  updateFailure: false
};

export type PasswordState = Readonly<typeof initialState>;

// Reducer
export default (state: PasswordState = initialState, action): PasswordState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.UPDATE_PASSWORD):
      return {
        ...initialState,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case FAILURE(ACTION_TYPES.UPDATE_PASSWORD):
      return {
        ...initialState,
        loading: false,
        updateSuccess: false,
        updateFailure: true
      };
    case SUCCESS(ACTION_TYPES.UPDATE_PASSWORD):
      return {
        ...initialState,
        loading: false,
        updateSuccess: true,
        updateFailure: false
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

// Selectors
const getPasswordState = (state: IRootState) => state.account.password;

export const selectPasswordLoading = createSelector(
  getPasswordState,
  (state: PasswordState) => state.loading
);

export const selectPasswordErrorMessage = createSelector(
  getPasswordState,
  (state: PasswordState) => state.errorMessage
);

export const selectPasswordUpdateSuccess = createSelector(
  getPasswordState,
  (state: PasswordState) => state.updateSuccess
);

export const selectPasswordUpdateFailure = createSelector(
  getPasswordState,
  (state: PasswordState) => state.updateFailure
);
