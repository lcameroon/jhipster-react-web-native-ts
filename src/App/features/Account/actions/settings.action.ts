import axios from 'axios';

import { getSession } from '../../../shared/actions/auth.action';

export const ACTION_TYPES = {
  UPDATE_ACCOUNT: 'account/UPDATE_ACCOUNT',
  RESET: 'account/RESET'
};

const apiUrl = 'api/account';

export const saveAccountSettings = account => async dispatch => {
  await dispatch({
    type: ACTION_TYPES.UPDATE_ACCOUNT,
    payload: axios.post(apiUrl, account),
    meta: {
      successMessage: `<strong>Settings saved!</strong>`
    }
  });
  dispatch(getSession());
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
