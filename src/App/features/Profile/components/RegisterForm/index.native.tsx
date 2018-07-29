import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../../../../theme';

const styles = StyleSheet.create(theme.components);

export default class Register extends Component {
  static navigationOptions = {
    title: 'Register'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Register</Text>
      </View>
    );
  }
}
