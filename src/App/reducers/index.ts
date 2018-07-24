import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from '../shared/reducers/locale.reducer';
import authentication, { AuthenticationState } from '../shared/reducers/auth.reducer';

import account, { IAccountState } from '../features/Account/reducers';
// import admin, { IAdminState } from '../features/Admin/reducers';

export interface IRootState {
  readonly account: IAccountState;
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  account,
  authentication,
  locale,
  loadingBar
  // admin
});

export default rootReducer;
