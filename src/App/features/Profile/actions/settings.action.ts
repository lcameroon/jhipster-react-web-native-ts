import axios from 'axios';

import { getSession } from '../../../shared/actions/auth.action';

export const ACTION_TYPES = {
  UPDATE_ACCOUNT: 'profile/UPDATE_ACCOUNT',
  RESET: 'profile/RESET'
};

const apiUrl = 'api/profile';

export const saveProfileSettings = profile => async dispatch => {
  await dispatch({
    type: ACTION_TYPES.UPDATE_ACCOUNT,
    payload: axios.post(apiUrl, profile),
    meta: {
      successMessage: `<strong>Settings saved!</strong>`
    }
  });
  dispatch(getSession());
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
