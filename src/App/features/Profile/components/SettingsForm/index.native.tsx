import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { INavigationOptions } from '../../../../routes/index.native';
import theme from '../../../../theme';

const styles = StyleSheet.create(theme.components);

export interface IProps extends INavigationOptions {}
export interface IState {}

export class ProfileScreen extends React.Component<IProps, IState> {
  static navigationOptions = {
    title: 'Profile'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Profile Screen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
