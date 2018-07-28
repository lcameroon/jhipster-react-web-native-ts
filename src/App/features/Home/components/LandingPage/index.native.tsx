import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

class LandingPageScreen extends Component<any, any> {
  handleLogout() {
    const { navigation } = this.props;
    this.props.logout();
    setTimeout(() => {
      return navigation.goBack(null);
    }, 1000);
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>Landing Page</Text>
        <Button title="Login" onPress={() => {}} />
        <Button title="Signup" onPress={() => {}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    fontSize: 24,
    textAlign: 'center'
  }
});

export default StackNavigator(
  {
    Home: {
      screen: LandingPageScreen
    }
  },
  {
    headerMode: 'none'
  }
);
