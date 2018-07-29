import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button } from 'react-native';

import { IRootState } from '../../../../reducers';
import { INavigationOptions } from '../../../../routes/index.native';
import { logout } from '../../../../shared/actions/auth.action';
import { selectIsAuthenticated } from '../../../../shared/reducers/auth.reducer';
import theme from '../../../../theme';

const styles = StyleSheet.create(theme.components);

export interface IProps extends StateProps, DispatchProps, INavigationOptions {}
export interface IState {}

export class DashboardScreen extends React.Component<IProps, IState> {
  static navigationOptions = {
    title: 'Dashboard'
  };

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.loginScreen();
    }
  }

  profileScreen = () => {
    this.props.navigation.navigate({ routeName: 'Profile' });
  };

  loginScreen = () => {
    this.props.navigation.navigate({ routeName: 'Login' });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{'You are "logged in" right now'}</Text>
        <Button onPress={this.profileScreen} title="Profile" />
        <Button onPress={this.props.logout} title="Log out" />
      </View>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  isLoggedIn: selectIsAuthenticated(state)
});
const mapDispatchToProps = { logout };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);
