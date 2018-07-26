import { combineReducers } from 'redux';

import authentication, { AuthenticationState } from '../shared/reducers/auth.reducer';
import profile, { IProfileState } from '../features/Profile/reducers';

export interface IRootState {
  readonly profile: IProfileState;
  readonly authentication: AuthenticationState;
}

const rootReducer = combineReducers<IRootState>({
  profile,
  authentication
});

export default rootReducer;
