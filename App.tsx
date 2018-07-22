import * as Expo from 'expo';
import * as React from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';

import App from './src/App/index.native';
import getTheme from './src/App/theme/components';
import variables from './src/App/theme/variables/platform';
import configureStore from './src/App/store';

export interface IProps {}
export interface IState {
  store: {};
  isLoading: boolean;
  isReady: boolean;
}

export default class Setup extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady || this.state.isLoading) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store}>
          <App />
        </Provider>
      </StyleProvider>
    );
  }
}
