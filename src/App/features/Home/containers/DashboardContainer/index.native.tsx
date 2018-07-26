import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { logout } from '../../../../shared/actions/auth.action';
import { selectIsAuthenticated } from '../../../../shared/reducers/auth.reducer';

const mapStateToProps = (state: any) => ({
  isAuthenticated: selectIsAuthenticated(state)
});
const mapDispatchToProps = { logout };

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class DashboardScreen extends Component<any, any> {
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
        <Text style={styles.header}>Dashboard</Text>
        <Button title="Logout" onPress={() => this.handleLogout()} />
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
    Dashboard: {
      screen: DashboardScreen
    }
  },
  {
    headerMode: 'none'
  }
);
