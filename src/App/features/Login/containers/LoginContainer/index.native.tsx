import React from 'react';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { login } from '../../../../shared/actions/auth.action';
import { selectIsAuthenticated } from '../../../../shared/reducers/auth.reducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

const LoginScreen: any = ({ handleLogin, isLoggedIn, navigation }) => {
  if (isLoggedIn) {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>username: admin</Text>
      <Text style={styles.welcome}>password: admin</Text>
      <Button onPress={() => handleLogin('admin', 'admin', false)} title="Log in" />
    </View>
  );
};

LoginScreen.navigationOptions = {
  title: 'Log In'
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsAuthenticated(state)
});

const mapDispatchToProps = {
  handleLogin: login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
