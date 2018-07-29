import { NavigationScreenProp } from 'react-navigation';

// Naviagtion
import Home from '../features/Home/containers/HomeContainer';
import Login from '../features/Login/containers/LoginContainer';
import Register from '../features/Profile/components/RegisterForm/index.native';
import Profile from '../features/Profile/components/SettingsForm/index.native';

interface IScreen {
  screen: any;
}

type Screens = { [key: string]: IScreen };

const screens: Screens = {
  Login: { screen: Login },
  Register: { screen: Register },
  Home: { screen: Home },
  Profile: { screen: Profile }
};

export default screens;

export interface INavigationOptions {
  navigation: NavigationScreenProp<NavigationProps>;
}

type NavigationProps = {
  getParam: Function;
  goBack: Function;
  isFocused: Function;
  navigate: Function;
  pop: Function;
  popToTop: Function;
  push: Function;
  replace: Function;
  setParams: Function;
};
