import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, View, Text, Button } from 'react-native';
import { logout } from '../../../../shared/actions/auth.action';
import { selectIsAuthenticated } from '../../../../shared/reducers/auth.reducer';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  }
});

const DashboardScreen: any = ({
  profileScreen,
  loginScreen,
  isLoggedIn,
  handleLogout
}) => {
  if (!isLoggedIn) {
    loginScreen();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{'You are "logged in" right now'}</Text>
      <Button onPress={profileScreen} title="Profile" />
      <Button onPress={handleLogout} title="Log out" />
    </View>
  );
};

DashboardScreen.navigationOptions = {
  title: 'Dashboard'
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsAuthenticated(state)
});
const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logout()),
  profileScreen: () => dispatch(NavigationActions.navigate({ routeName: 'Profile' })),
  loginScreen: () => dispatch(NavigationActions.navigate({ routeName: 'Login' }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);
