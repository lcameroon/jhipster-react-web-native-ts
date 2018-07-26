import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from '../shared/reducers/locale.reducer';
import authentication, { AuthenticationState } from '../shared/reducers/auth.reducer';

import profile, { IProfileState } from '../features/Profile/reducers';
import admin, { IAdminState } from '../features/Admin/reducers';

export interface IRootState {
  readonly admin: IAdminState;
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly loadingBar: any;
  readonly profile: IProfileState;
}

const rootReducer = combineReducers<IRootState>({
  admin,
  authentication,
  locale,
  loadingBar,
  profile
});

export default rootReducer;
