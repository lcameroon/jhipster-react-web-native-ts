import axios from 'axios';

import { getSession } from '../../../shared/actions/auth.action';

export const ACTION_TYPES = {
  UPDATE_ACCOUNT: 'profile/UPDATE_ACCOUNT',
  RESET: 'profile/RESET'
};

const apiUrl = 'api/account';

export const saveProfileSettings = profile => async dispatch => {
  const requestUrl = `${apiUrl}/${profile.id}`;
  await dispatch({
    type: ACTION_TYPES.UPDATE_ACCOUNT,
    payload: axios.post(requestUrl, profile),
    meta: {
      successMessage: `Settings saved!`
    }
  });
  dispatch(getSession());
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
