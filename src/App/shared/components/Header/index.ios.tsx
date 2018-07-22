import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

import logo from '../../../../assets/images/logo.png';

export default class Header extends React.Component {
  public render() {
    return (
      <View style={styles.appHeader}>
        <Image style={{ width: 113, height: 80 }} source={logo} />
        <Text style={styles.appTitle}>Welcome to iOS React️</Text>
      </View>
    );
  }
}
