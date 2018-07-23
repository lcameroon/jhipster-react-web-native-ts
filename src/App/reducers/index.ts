import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from '../shared/reducers/locale.reducer';
import authentication, { AuthenticationState } from '../shared/reducers/auth.reducer';

import register, { RegisterState } from '../features/Account/reducers/register.reducer';
import password, { PasswordState } from '../features/Account/reducers/password.reducer';
import settings, { SettingsState } from '../features/Account/reducers/settings.reducer';
// import userManagement, {
//   UserManagementState
// } from 'app/features/admin/user-management/user-management.reducer';

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly loadingBar: any;
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly register: RegisterState;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  locale,
  loadingBar,
  password,
  settings,
  register
  // userManagement
});

export default rootReducer;
