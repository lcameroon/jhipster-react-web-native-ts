import { createSelector } from 'reselect';
import { ACTION_TYPES } from '../actions/register.action';

import { REQUEST, SUCCESS, FAILURE } from '../../../shared/utils/action-type.util';
import { IRootState } from '../../../reducers';

const initialState = {
  loading: false,
  registrationSuccess: false,
  registrationFailure: false,
  errorMessage: null
};

export type RegisterState = Readonly<typeof initialState>;

// Reducer
export default (state: RegisterState = initialState, action): RegisterState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.CREATE_ACCOUNT):
      return {
        ...state,
        loading: true
      };
    case FAILURE(ACTION_TYPES.CREATE_ACCOUNT):
      return {
        ...initialState,
        registrationFailure: true,
        errorMessage: action.payload.response.data.errorKey
      };
    case SUCCESS(ACTION_TYPES.CREATE_ACCOUNT):
      return {
        ...initialState,
        registrationSuccess: true
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
const getRegisterState = (state: IRootState) => state.profile.register;

export const selectRegisterLoading = createSelector(
  getRegisterState,
  (state: RegisterState) => state.loading
);

export const selectRegisterErrorMessage = createSelector(
  getRegisterState,
  (state: RegisterState) => state.errorMessage
);

export const selectRegisterUpdateSuccess = createSelector(
  getRegisterState,
  (state: RegisterState) => state.registrationSuccess
);

export const selectRegisterUpdateFailure = createSelector(
  getRegisterState,
  (state: RegisterState) => state.registrationFailure
);
