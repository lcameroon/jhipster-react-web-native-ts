import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default class LandingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal pagingEnabled decelerationRate={0.993}>
          <Text style={styles.loginText}>LandingPage</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  loginText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  }
});
