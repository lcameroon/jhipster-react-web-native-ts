import React from 'react';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import { clearAuthentication } from './src/App/shared/actions/auth.action';
import setupAxiosInterceptors from './src/App/shared/interceptors/axios.interceptor';
import initStore from './src/App/store';
// Screens
import App from './src/App';
import Home from './src/App/features/Home/containers/HomeContainer';

const RootStack = StackNavigator(
  {
    App,
    Home
  },
  {
    initialRouteName: 'App'
  }
);

const store = initStore();
const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('error.http.403'));

export default class NativeApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
// Disable the Yellow Box
console.ignoredYellowBox = ['Warning:'];
