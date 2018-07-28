import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../index.native';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(secondAction, tempNavState);

const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

import authentication, { AuthenticationState } from '../shared/reducers/auth.reducer';
import profile, { IProfileState } from '../features/Profile/reducers';

export interface IRootState {
  readonly nav: any;
  readonly authentication: AuthenticationState;
  readonly profile: IProfileState;
}

const rootReducer = combineReducers<IRootState>({
  nav,
  authentication,
  profile
});

export default rootReducer;
