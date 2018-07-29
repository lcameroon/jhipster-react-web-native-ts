import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Alert,
  Row,
  Col
} from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

import { ILoginProps } from '../../containers/LoginContainer';

export interface ILoginState {
  showModal: boolean;
}

class LoginModal extends React.Component<ILoginProps, ILoginState> {
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

  handleSubmit = (event, errors, { username, password, rememberMe }) => {
    this.handleLogin(username, password, rememberMe);
  };

  render() {
    return (
      <Modal
        isOpen={this.state.showModal}
        toggle={this.handleClose}
        backdrop="static"
        id="login-page"
        autoFocus={false}
      >
        <AvForm onSubmit={this.handleSubmit}>
          <ModalHeader id="login-title" toggle={this.handleClose}>
            Sign in
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                {this.props.loginError ? (
                  <Alert color="danger">
                    <strong>Failed to sign in!</strong> Please check your credentials and
                    try again.
                  </Alert>
                ) : null}
              </Col>
              <Col md="12">
                <AvField
                  name="username"
                  label="Username"
                  placeholder="Your username"
                  required
                  errorMessage="Username cannot be empty!"
                  autoFocus
                />
                <AvField
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Your password"
                  required
                  errorMessage="Password cannot be empty!"
                />
                <AvGroup check inline>
                  <Label className="form-check-label">
                    <AvInput type="checkbox" name="rememberMe" /> Remember me
                  </Label>
                </AvGroup>
              </Col>
            </Row>
            <div className="mt-1">&nbsp;</div>
            <Alert color="warning">
              <Link to="/reset/request">Did you forget your password?</Link>
            </Alert>
            <Alert color="warning">
              <span>You don't have an profile yet?</span>{' '}
              <Link to="/register">Register a new profile</Link>
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.handleClose} tabIndex="1">
              Cancel
            </Button>{' '}
            <Button color="primary" type="submit">
              Sign in
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    );
  }
}

export default LoginModal;
