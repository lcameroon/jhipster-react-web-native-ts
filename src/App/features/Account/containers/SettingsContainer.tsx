import React from 'react';
import { connect } from 'react-redux';

import { IRootState } from '../../../reducers';
import { getSession } from '../../../shared/actions/auth.action';
import { saveAccountSettings, reset } from '../actions/settings.action';
import {
  selectAuthUser,
  selectIsAuthenticated
} from '../../../shared/reducers/auth.reducer';
import { SettingsForm } from '../components/SettingsForm';

export interface IUserSettingsProps extends StateProps, DispatchProps {}

export interface IUserSettingsState {
  user: any;
}

export class SettingsContainer extends React.Component<
  IUserSettingsProps,
  IUserSettingsState
> {
  componentDidMount() {
    this.props.getSession();
  }

  componentWillUnmount() {
    this.props.reset();
  }

  handleValidSubmit = (event, values) => {
    const user = {
      ...this.props.user,
      ...values
    };

    this.props.saveAccountSettings(user);
    event.persist();
  };

  render() {
    const { user, isAuthenticated } = this.props;

    return (
      <SettingsForm
        user={user}
        isAuthenticated={isAuthenticated}
        handleValidSubmit={this.handleValidSubmit}
      />
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: selectAuthUser(state),
  isAuthenticated: selectIsAuthenticated(state)
});

const mapDispatchToProps = { getSession, saveAccountSettings, reset };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsContainer);
