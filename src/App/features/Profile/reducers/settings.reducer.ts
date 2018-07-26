import { createSelector } from 'reselect';
import { ACTION_TYPES } from '../actions/settings.action';

import { REQUEST, SUCCESS, FAILURE } from '../../../shared/utils/action-type.util';
import { IRootState } from '../../../reducers';

const initialState = {
  loading: false,
  errorMessage: null,
  updateSuccess: false,
  updateFailure: false
};

export type SettingsState = Readonly<typeof initialState>;

// Reducer
export default (state: SettingsState = initialState, action): SettingsState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.UPDATE_ACCOUNT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case FAILURE(ACTION_TYPES.UPDATE_ACCOUNT):
      return {
        ...state,
        loading: false,
        updateSuccess: false,
        updateFailure: true
      };
    case SUCCESS(ACTION_TYPES.UPDATE_ACCOUNT):
      return {
        ...state,
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
const getSettingsState = (state: IRootState) => state.profile.settings;

export const selectSettingsLoading = createSelector(
  getSettingsState,
  (state: SettingsState) => state.loading
);

export const selectSettingsErrorMessage = createSelector(
  getSettingsState,
  (state: SettingsState) => state.errorMessage
);

export const selectSettingsUpdateSuccess = createSelector(
  getSettingsState,
  (state: SettingsState) => state.updateSuccess
);

export const selectSettingsUpdateFailure = createSelector(
  getSettingsState,
  (state: SettingsState) => state.updateFailure
);
