import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import appConstants from '../../../../../shared/constants';
import { IUserManagementDetailProps } from '../../containers/UserManagementDetailContainer';

export class UserManagementDetail extends React.Component<
  IUserManagementDetailProps | any
> {
  render() {
    const { user } = this.props;
    return (
      <Row className="justify-content-center">
        <Col md="8">
          <h2>
            User [<b>{user.login}</b>]
          </h2>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Login</label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">
                <span className="pr-3">{user.login}</span>&nbsp;
                {user.activated ? (
                  <Badge color="success">Activated</Badge>
                ) : (
                  <Badge color="danger">Deactivated</Badge>
                )}
              </p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">First Name</label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">{user.firstName}</p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Last Name</label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">{user.lastName}</p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">{user.email}</p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Lang Key</label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">{user.langKey}</p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Created By</label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">{user.createdBy}</p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Created Date</label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">
                <TextFormat
                  value={user.createdDate}
                  type="date"
                  format={appConstants.formats.date}
                  blankOnInvalid
                />
              </p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Last Modified By</label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">{user.lastModifiedBy}</p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Last Modified Date</label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">
                <TextFormat
                  value={user.lastModifiedDate}
                  type="date"
                  format={appConstants.formats.date}
                  blankOnInvalid
                />
              </p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Roles</label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">
                <ul className="list-unstyled">
                  {user.authorities
                    ? user.authorities.map((authority, i) => (
                        <li key={`user-auth-${i}`}>
                          <Badge color="info">{authority}</Badge>
                        </li>
                      ))
                    : null}
                </ul>
              </p>
            </div>
          </div>
          <Button tag={Link} to="/admin/user-management" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">Back</span>
          </Button>
        </Col>
      </Row>
    );
  }
}
