import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { INavigationOptions } from '../../../../routes/index.native';
import { ILoginProps } from '../../containers/LoginContainer';
import theme from '../../../../theme';

const styles = StyleSheet.create(theme.components);

export interface IProps extends ILoginProps, INavigationOptions {}
export interface IState {}

export class LoginScreen extends React.Component<IProps, IState> {
  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.navigation.goBack();
    }
  }

  handleLogin = () => this.props.login('admin', 'admin', false);

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>username: admin</Text>
        <Text style={styles.welcome}>password: admin</Text>
        <Button onPress={this.handleLogin} title="Log in" />
      </View>
    );
  }
}

export default LoginScreen;
