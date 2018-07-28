import axios from 'axios';

export const ACTION_TYPES = {
  UPDATE_PASSWORD: 'profile/UPDATE_PASSWORD',
  RESET: 'profile/RESET'
};

const apiUrl = 'api/profile';

export const savePassword = (currentPassword, newPassword) => ({
  type: ACTION_TYPES.UPDATE_PASSWORD,
  payload: axios.post(`${apiUrl}/change-password`, {
    currentPassword,
    newPassword
  }),
  meta: {
    successMessage: `Password changed!`,
    errorMessage: `An error has occurred! The password could not be changed.`
  }
});

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
