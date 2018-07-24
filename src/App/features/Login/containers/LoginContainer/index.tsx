import React from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { IRootState } from '../../../../reducers';
import { login } from '../../../../shared/actions/auth.action';
import {
  selectIsAuthenticated,
  selectAuthLoginError,
  selectAuthShowModalLogin
} from '../../../../shared/reducers/auth.reducer';
import LoginModal from '../../components/LoginModal';

export interface ILoginProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<any> {}

export interface ILoginState {
  showModal: boolean;
}

export class LoginContainer extends React.Component<ILoginProps, ILoginState> {
  state: ILoginState = {
    showModal: this.props.showModal
  };

  componentDidUpdate(prevProps: ILoginProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({ showModal: this.props.showModal });
    }
  }

  handleLogin = (username, password, rememberMe = false) => {
    this.props.login(username, password, rememberMe);
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { isAuthenticated } = this.props;
    const { from } = this.props['location'].state || {
      from: { pathname: '/', search: this.props['location'].search }
    };
    const { showModal } = this.state;
    if (isAuthenticated) {
      return <Redirect to={from} />;
    }
    return (
      <LoginModal
        showModal={showModal}
        handleLogin={this.handleLogin}
        handleClose={this.handleClose}
        loginError={this.props.loginError}
      />
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  isAuthenticated: selectIsAuthenticated(state),
  loginError: selectAuthLoginError(state),
  showModal: selectAuthShowModalLogin(state)
});

const mapDispatchToProps = { login };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
