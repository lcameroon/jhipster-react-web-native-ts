import React from 'react';
import { connect } from 'react-redux';

import { IRootState } from '../../../reducers';
import { selectIsAuthenticated } from '../../../shared/reducers/auth.reducer';
import Dashboard from '../components/Dashboard';
import LandingPage from '../components/LandingPage';

export interface IUserSettingsProps extends StateProps, DispatchProps {}

export interface IUserSettingsState {
  user: any;
}

export class HomeContainer extends React.Component<
  IUserSettingsProps,
  IUserSettingsState
> {
  static navigationOptions = {
    header: null
  };

  render() {
    const { isAuthenticated } = this.props;

    return isAuthenticated ? (
      <Dashboard {...this.props} />
    ) : (
      <LandingPage {...this.props} />
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  isAuthenticated: selectIsAuthenticated(state)
});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
