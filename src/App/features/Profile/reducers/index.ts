import { combineReducers } from 'redux';

import register, { RegisterState } from './register.reducer';
import password, { PasswordState } from './password.reducer';
import settings, { SettingsState } from './settings.reducer';

export interface IProfileState {
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly register: RegisterState;
}

const profileReducer = combineReducers<IProfileState>({
  password,
  settings,
  register
});

export default profileReducer;
