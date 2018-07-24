import axios from 'axios';

export const ACTION_TYPES = {
  UPDATE_PASSWORD: 'account/UPDATE_PASSWORD',
  RESET: 'account/RESET'
};

const apiUrl = 'api/account';

export const savePassword = (currentPassword, newPassword) => ({
  type: ACTION_TYPES.UPDATE_PASSWORD,
  payload: axios.post(`${apiUrl}/change-password`, {
    currentPassword,
    newPassword
  }),
  meta: {
    successMessage: `<strong>Password changed!</strong>`,
    errorMessage: `<strong>An error has occurred!</strong> The password could not be changed.`
  }
});

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
