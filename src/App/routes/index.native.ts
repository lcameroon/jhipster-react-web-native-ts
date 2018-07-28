import { StackNavigator } from 'react-navigation';

import Login from '../features/Login/containers/LoginContainer';
import Register from '../features/Profile/containers/RegisterContainer';
import Home from '../features/Home/containers/HomeContainer';

interface IScreen {
  screen: any;
}

type Screens = { [any: string]: IScreen };

const screens: Screens = {
  '/': { screen: Login },
  '/register': { screen: Register },
  '/home': { screen: Home }
};

const NativeRoutes = StackNavigator(screens);

export default NativeRoutes;
