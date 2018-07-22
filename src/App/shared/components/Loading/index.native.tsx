import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import theme from '../../../theme/variables/commonColor';

const Loading = () => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
    <ActivityIndicator size="large" color={theme.brandPrimary} />
  </View>
);

export default Loading;
