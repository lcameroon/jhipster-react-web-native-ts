import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { locales } from '../../../../shared/utils/translation.util';

export class SettingsForm extends React.Component<any, any> {
  render() {
    const { user, handleValidSubmit } = this.props;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="settings-title">User settings for {user.login}</h2>
            <AvForm id="settings-form" onValidSubmit={handleValidSubmit}>
              {/* First name */}
              <AvField
                className="form-control"
                name="firstName"
                label="First Name"
                id="firstName"
                placeholder="Your first name"
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Your first name is required.'
                  },
                  minLength: {
                    value: 1,
                    errorMessage: 'Your first name is required to be at least 1 character'
                  },
                  maxLength: {
                    value: 50,
                    errorMessage: 'Your first name cannot be longer than 50 characters'
                  }
                }}
                value={user.firstName}
              />
              {/* Last name */}
              <AvField
                className="form-control"
                name="lastName"
                label="Last Name"
                id="lastName"
                placeholder="Your last name"
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'Your last name is required.'
                  },
                  minLength: {
                    value: 1,
                    errorMessage: 'Your last name is required to be at least 1 character'
                  },
                  maxLength: {
                    value: 50,
                    errorMessage: 'Your last name cannot be longer than 50 characters'
                  }
                }}
                value={user.lastName}
              />
              {/* Email */}
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
                  minLength: {
                    value: 5,
                    errorMessage: 'Your email is required to be at least 5 characters.'
                  },
                  maxLength: {
                    value: 254,
                    errorMessage: 'Your email cannot be longer than 50 characters.'
                  }
                }}
                value={user.email}
              />
              {/* Language key */}
              <AvField
                type="select"
                id="langKey"
                name="langKey"
                className="form-control"
                label="Language"
                value={user.langKey}
              >
                {/* TODO: Add findLanguageFromKey translation to options */}
                {locales.map(lang => (
                  <option value={lang} key={lang}>
                    {lang}
                  </option>
                ))}
              </AvField>
              <Button color="primary" type="submit">
                Save
              </Button>
            </AvForm>
          </Col>
        </Row>
      </div>
    );
  }
}
