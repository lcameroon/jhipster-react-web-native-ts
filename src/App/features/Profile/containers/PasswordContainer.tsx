import React from 'react';
import { connect } from 'react-redux';

import { IRootState } from '../../../reducers';
import { getSession } from '../../../shared/actions/auth.action';
import { savePassword, reset } from '../actions/password.action';
import { PasswordForm } from '../components/PasswordForm';
import {
  selectAuthUser,
  selectIsAuthenticated
} from '../../../shared/reducers/auth.reducer';

export interface IUserPasswordProps extends StateProps, DispatchProps {}

export interface IUserPasswordState {
  password: string;
}

export class PasswordContainer extends React.Component<
  IUserPasswordProps,
  IUserPasswordState
> {
  state: IUserPasswordState = {
    password: ''
  };

  componentDidMount() {
    this.props.reset();
    this.props.getSession();
  }

  componentWillUnmount() {
    this.props.reset();
  }

  handleValidSubmit = (event, values) => {
    this.props.savePassword(values.currentPassword, values.newPassword);
  };

  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { user, isAuthenticated } = this.props;

    return (
      <PasswordForm
        user={user}
        password={this.state.password}
        isAuthenticated={isAuthenticated}
        updatePassword={this.updatePassword}
        handleValidSubmit={this.handleValidSubmit}
      />
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: selectAuthUser(state),
  isAuthenticated: selectIsAuthenticated(state)
});

const mapDispatchToProps = { getSession, savePassword, reset };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordContainer);
