import axios from 'axios';

export const ACTION_TYPES = {
  CREATE_ACCOUNT: 'register/CREATE_ACCOUNT',
  RESET: 'register/RESET'
};

export const handleRegister = (login, email, password, langKey = 'en') => ({
  type: ACTION_TYPES.CREATE_ACCOUNT,
  payload: axios.post('api/register', { login, email, password, langKey }),
  meta: {
    successMessage: `Registration saved! Please check your email for confirmation.`
  }
});

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
