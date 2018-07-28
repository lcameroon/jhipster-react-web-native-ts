import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { initializeListeners } from 'react-navigation-redux-helpers';

import RootNavigator from './routes/index.native';
import { addListener } from './store/index.native';

export const AppNavigator = StackNavigator(RootNavigator);

class AppWithNavigationState extends React.Component<any, any> {
  componentDidMount() {
    initializeListeners('root', this.props.nav);
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
