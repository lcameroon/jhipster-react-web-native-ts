import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import theme from '../../../theme';

const Loading = () => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
    <ActivityIndicator size="large" color={theme.colors.primary} />
  </View>
);

export default Loading;
