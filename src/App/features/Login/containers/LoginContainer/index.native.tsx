import React from 'react';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';

import { INavigationOptions } from '../../../../routes/index.native';
import { login } from '../../../../shared/actions/auth.action';
import { selectIsAuthenticated } from '../../../../shared/reducers/auth.reducer';
import theme from '../../../../theme';

const styles = StyleSheet.create(theme.components);

export interface IProps extends StateProps, DispatchProps, INavigationOptions {}
export interface IState {}

export class LoginScreen extends React.Component<IProps, IState> {
  static navigationOptions = {
    title: 'Log In'
  };

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
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

const mapStateToProps = state => ({
  isLoggedIn: selectIsAuthenticated(state)
});
const mapDispatchToProps = { login };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
