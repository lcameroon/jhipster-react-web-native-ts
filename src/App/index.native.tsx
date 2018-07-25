import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { login } from './shared/actions/auth.action';

import Header from './shared/components/Header';

import {
  selectIsAuthenticated,
  selectAuthLoginError
} from './shared/reducers/auth.reducer';

const mapStateToProps = (state: any) => ({
  isAuthenticated: selectIsAuthenticated(state),
  loginError: selectAuthLoginError(state)
});

const mapDispatchToProps = { login };

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class App extends Component<any, any> {
  render() {
    const { isAuthenticated, navigation } = this.props;

    if (isAuthenticated) {
      return navigation.navigate('Dashboard');
    }

    return (
      <View style={styles.app}>
        <Header />
        <Button title="Login" onPress={() => this.props.login('admin', 'admin', false)} />
        <Text style={styles.appIntro}>Hard coded username and password (admin)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appIntro: {
    flex: 2,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15
  }
});

export default StackNavigator(
  {
    App: {
      screen: App
    }
  },
  {
    headerMode: 'none'
  }
);
