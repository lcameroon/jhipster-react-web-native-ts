import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from '../shared/reducers/locale.reducer';
import authentication, { AuthenticationState } from '../shared/reducers/auth.reducer';
// import applicationProfile, { ApplicationProfileState } from 'app/shared/reducers/application-profile';

// import userManagement, {
//   UserManagementState
// } from 'app/features/admin/user-management/user-management.reducer';
// import register, { RegisterState } from 'app/features/account/register/register.reducer';
// import activate, { ActivateState } from 'app/features/account/activate/activate.reducer';
// import password, { PasswordState } from 'app/features/account/password/password.reducer';
// import settings, { SettingsState } from 'app/features/account/settings/settings.reducer';
// import passwordReset, {
//   PasswordResetState
// } from 'app/features/account/password-reset/password-reset.reducer';

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly loadingBar: any;
  // readonly applicationProfile: ApplicationProfileState;
  // readonly userManagement: UserManagementState;
  // readonly register: RegisterState;
  // readonly activate: ActivateState;
  // readonly passwordReset: PasswordResetState;
  // readonly password: PasswordState;
  // readonly settings: SettingsState;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  locale,
  loadingBar
  // applicationProfile,
  // userManagement,
  // register,
  // activate,
  // passwordReset,
  // password,
  // settings,
});

export default rootReducer;
