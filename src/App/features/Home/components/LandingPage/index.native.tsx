import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button } from 'react-native';

import { IRootState } from '../../../../reducers';
import { selectIsAuthenticated } from '../../../../shared/reducers/auth.reducer';
import theme from '../../../../theme';

const styles = StyleSheet.create(theme.components);

export interface IProps extends StateProps, DispatchProps {}
export interface IState {}

export class LandingScreen extends React.Component<IProps, IState> {
  static navigationOptions = {
    header: null
  };

  loginScreen = () => {
    this.props.navigation.navigate({ routeName: 'Login' });
  };

  registerScreen = () => {
    this.props.navigation.navigate({ routeName: 'Register' });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          isLoggedIn{this.props.isLoggedIn ? ': YES' : ': NO'}
        </Text>
        <Text style={styles.welcome}>{'Landing Page'}</Text>
        <Button onPress={this.loginScreen} title="Go to Login Screen" />
        <Button onPress={this.registerScreen} title="Go to Register Screen" />
      </View>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  isLoggedIn: selectIsAuthenticated(state)
});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps | any;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingScreen);
