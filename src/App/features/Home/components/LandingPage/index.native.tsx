import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, View, Text, Button } from 'react-native';
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

const LandingScreen: any = ({ loginScreen, isLoggedIn }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>isLoggedIn{isLoggedIn ? ': YES' : ': NO'}</Text>
    <Text style={styles.welcome}>{'Landing Page'}</Text>
    <Button onPress={loginScreen} title="Go to Login" />
  </View>
);

LandingScreen.navigationOptions = {
  header: null
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsAuthenticated(state)
});
const mapDispatchToProps = dispatch => ({
  loginScreen: () => dispatch(NavigationActions.navigate({ routeName: 'Login' }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingScreen);
