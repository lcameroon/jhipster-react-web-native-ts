import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Root } from 'native-base';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

import Login from './features/Login/containers/LoginContainer';
import Home from './features/Home/containers/HomeContainer';
import BlankPage from './shared/components/BlankPage';
import Sidebar from './shared/components/Sidebar';

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    drawerWidth: deviceWidth - 50,
    drawerPosition: 'left',
    contentComponent: (props: any) => <Sidebar {...props} />
  }
);

const App = StackNavigator(
  {
    Login: { screen: Login },
    BlankPage: { screen: BlankPage },
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default () => (
  <Root>
    <App />
  </Root>
);
