import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './shared/components/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Header />
        <Text style={styles.appIntro}>
          To get started, edit src/App.js and save to reload.
        </Text>
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
