// Naviagtion
import Home from '../features/Home/containers/HomeContainer';
import Login from '../features/Login/containers/LoginContainer';
import Profile from '../features/Profile/components/SettingsForm/index.native';

interface IScreen {
  screen: any;
}

type Screens = { [key: string]: IScreen };

const screens: Screens = {
  Login: { screen: Login },
  Home: { screen: Home },
  Profile: { screen: Profile }
};

export default screens;
