import React from 'react';
import { connect } from 'react-redux';

import { IRootState } from '../../../reducers';
import { handleRegister, reset } from '../actions/register.action';
import { selectCurrentLocale } from '../../../shared/reducers/locale.reducer';
import { RegisterForm } from '../components/RegisterForm';

export interface IRegisterProps extends StateProps, DispatchProps {}

export interface IRegisterState {
  password: string;
}

export class RegisterContainer extends React.Component<IRegisterProps, IRegisterState> {
  state: IRegisterState = {
    password: ''
  };

  componentWillUnmount() {
    this.props.reset();
  }

  handleValidSubmit = (event, values) => {
    this.props.handleRegister(
      values.username,
      values.email,
      values.firstPassword,
      this.props.currentLocale
    );
    event.preventDefault();
  };

  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <RegisterForm
        password={this.state.password}
        currentLocale={this.props.currentLocale}
        handleValidSubmit={this.handleValidSubmit}
        updatePassword={this.updatePassword}
      />
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  currentLocale: selectCurrentLocale(state)
});

const mapDispatchToProps = { handleRegister, reset };
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
