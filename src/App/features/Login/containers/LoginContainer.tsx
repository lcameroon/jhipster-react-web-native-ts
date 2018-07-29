import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { IRootState } from '../../../reducers';
import { login } from '../../../shared/actions/auth.action';
import {
  selectIsAuthenticated,
  selectAuthLoginError,
  selectAuthShowModalLogin
} from '../../../shared/reducers/auth.reducer';
import LoginModal from '../components/LoginModal';

export interface ILoginProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<any> {}
export interface IState {}

export class LoginContainer extends React.Component<ILoginProps, IState> {
  static navigationOptions = {
    title: 'Log In'
  };

  render() {
    return <LoginModal {...this.props} />;
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
