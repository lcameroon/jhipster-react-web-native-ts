import { StackNavigator } from 'react-navigation';

import Login from '../features/Login/containers/LoginContainer';
import Register from '../features/Account/containers/RegisterContainer';
import Dashboard from '../features/Home/components/Dashboard';

interface IScreen {
  screen: any;
}

type Screens = { [any: string]: IScreen };

const screens: Screens = {
  '/': { screen: Login },
  '/register': { screen: Register },
  '/home': { screen: Dashboard }
};

const NativeRoutes = StackNavigator(screens);

export default NativeRoutes;
