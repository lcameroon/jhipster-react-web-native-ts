import { combineReducers } from 'redux';

import authentication, { AuthenticationState } from '../shared/reducers/auth.reducer';
import account, { IAccountState } from '../features/Account/reducers';

export interface IRootState {
  readonly account: IAccountState;
  readonly authentication: AuthenticationState;
}

const rootReducer = combineReducers<IRootState>({
  account,
  authentication
});

export default rootReducer;
