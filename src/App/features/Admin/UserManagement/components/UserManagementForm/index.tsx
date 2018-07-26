import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, Row, Col } from 'reactstrap';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvField,
  AvFeedback
} from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { locales } from '../../../../../shared/utils/translation.util';
import { IUserManagementFormProps } from '../../containers/UserManagementFormContainer';

export class UserManagementForm extends React.Component<IUserManagementFormProps | any> {
  render() {
    const isInvalid = false;
    const { isNew, user, loading, updating, roles, saveUser } = this.props;
    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h1>Create or edit a User</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm onValidSubmit={saveUser}>
                {isNew ? null : (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvField
                      type="text"
                      className="form-control"
                      name="id"
                      required
                      readOnly
                      value={user.id}
                    />
                  </AvGroup>
                )}
                <AvGroup>
                  <Label for="login">Login</Label>
                  <AvField
                    type="text"
                    className="form-control"
                    name="login"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: 'Your username is required.'
                      },
                      pattern: {
                        value: '^[_.@A-Za-z0-9-]*$',
                        errorMessage: 'Your username can only contain letters and digits.'
                      },
                      minLength: {
                        value: 1,
                        errorMessage:
                          'Your username is required to be at least 1 character.'
                      },
                      maxLength: {
                        value: 50,
                        errorMessage: 'Your username cannot be longer than 50 characters.'
                      }
                    }}
                    value={user.login}
                  />
                </AvGroup>
                <AvGroup>
                  <Label for="firstName">First Name</Label>
                  <AvField
                    type="text"
                    className="form-control"
                    name="firstName"
                    validate={{
                      maxLength: {
                        value: 50,
                        errorMessage:
                          'Your First name cannot be longer than 50 characters.'
                      }
                    }}
                    value={user.firstName}
                  />
                </AvGroup>
                <AvGroup>
                  <Label for="lastName">Last Name</Label>
                  <AvField
                    type="text"
                    className="form-control"
                    name="lastName"
                    validate={{
                      maxLength: {
                        value: 50,
                        errorMessage:
                          'Your Last name cannot be longer than 50 characters.'
                      }
                    }}
                    value={user.lastName}
                  />
                  <AvFeedback>This field cannot be longer than 50 characters.</AvFeedback>
                </AvGroup>
                <AvGroup>
                  <AvField
                    name="email"
                    label="Email"
                    placeholder="Your email"
                    type="email"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: 'Your email is required.'
                      },
                      email: {
                        errorMessage: 'Your email is invalid.'
                      },
                      minLength: {
                        value: 5,
                        errorMessage:
                          'Your email is required to be at least 5 characters.'
                      },
                      maxLength: {
                        value: 254,
                        errorMessage: 'Your email cannot be longer than 50 characters.'
                      }
                    }}
                    value={user.email}
                  />
                </AvGroup>
                <AvGroup check>
                  <Label>
                    <AvInput type="checkbox" name="activated" value={user.activated} />{' '}
                    Activated
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label for="langKey">Language Key</Label>
                  <AvField
                    type="select"
                    className="form-control"
                    name="langKey"
                    defaultValue={locales[0]}
                  >
                    {locales.map(lang => (
                      <option value={lang} key={lang}>
                        {lang}
                      </option>
                    ))}
                  </AvField>
                </AvGroup>
                <AvGroup>
                  <Label for="authorities">Roles</Label>
                  <AvInput
                    type="select"
                    className="form-control"
                    name="authorities"
                    value={user.authorities}
                    multiple
                  >
                    {roles.map(role => (
                      <option value={role} key={role}>
                        {role}
                      </option>
                    ))}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} to="/admin/user-management" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />&nbsp;
                  <span className="d-none d-md-inline">Back</span>
                </Button>
                &nbsp;
                <Button color="primary" type="submit" disabled={isInvalid || updating}>
                  <FontAwesomeIcon icon="save" />&nbsp; Save
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
