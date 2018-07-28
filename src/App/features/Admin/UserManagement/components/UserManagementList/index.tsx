import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Row, Badge } from 'reactstrap';
import { TextFormat, JhiPagination, getPaginationItemsNumber } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import appConstants from '../../../../../shared/constants';
import { IUserManagementProps } from '../../containers/UserManagementListContainer';

export class UserManagementList extends React.Component<IUserManagementProps | any> {
  render() {
    const {
      users,
      account,
      match,
      totalItems,
      sort,
      toggleActive,
      handlePagination,
      confirmDelete,
      itemsPerPage,
      activePage
    } = this.props;

    const onConfirm = (id: number) => {
      const isOk = confirm(
        `Confirm delete operation\nAre you sure you want to delete this User?`
      );
      if (isOk) {
        confirmDelete(id);
      }
    };

    return (
      <div>
        <h2 className="userManagement-page-heading">
          Users
          <Link
            to={`${match.url}/new`}
            className="btn btn-primary float-right jh-create-entity"
          >
            <FontAwesomeIcon icon="plus" /> Create a new user
          </Link>
        </h2>
        <Table responsive striped>
          <thead>
            <tr>
              <th className="hand" onClick={sort('id')}>
                ID
                <FontAwesomeIcon icon="sort" />
              </th>
              <th className="hand" onClick={sort('login')}>
                Login
                <FontAwesomeIcon icon="sort" />
              </th>
              <th className="hand" onClick={sort('email')}>
                Email
                <FontAwesomeIcon icon="sort" />
              </th>
              <th />
              <th className="hand" onClick={sort('langKey')}>
                Lang Key
                <FontAwesomeIcon icon="sort" />
              </th>
              <th>Profiles</th>
              <th className="hand" onClick={sort('createdDate')}>
                Created Date
                <FontAwesomeIcon icon="sort" />
              </th>
              <th className="hand" onClick={sort('lastModifiedBy')}>
                Last Modified By
                <FontAwesomeIcon icon="sort" />
              </th>
              <th className="hand" onClick={sort('lastModifiedDate')}>
                Last Modified Date
                <FontAwesomeIcon icon="sort" />
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr id={user.login} key={`user-${i}`}>
                <td>
                  <Button
                    tag={Link}
                    to={`${match.url}/${user.login}`}
                    color="link"
                    size="sm"
                  >
                    {user.id}
                  </Button>
                </td>
                <td>{user.login}</td>
                <td>{user.email}</td>
                <td>
                  {user.activated ? (
                    <Button color="success" onClick={toggleActive(user)}>
                      Activated
                    </Button>
                  ) : (
                    <Button color="danger" onClick={toggleActive(user)}>
                      Deactivated
                    </Button>
                  )}
                </td>
                <td>{user.langKey}</td>
                <td>
                  {user.authorities
                    ? user.authorities.map((authority, j) => (
                        <div key={`user-auth-${i}-${j}`}>
                          <Badge color="info">{authority}</Badge>
                        </div>
                      ))
                    : null}
                </td>
                <td>
                  <TextFormat
                    value={user.createdDate}
                    type="date"
                    format={appConstants.formats.date}
                    blankOnInvalid
                  />
                </td>
                <td>{user.lastModifiedBy}</td>
                <td>
                  <TextFormat
                    value={user.lastModifiedDate}
                    type="date"
                    format={appConstants.formats.date}
                    blankOnInvalid
                  />
                </td>
                <td className="text-right">
                  <div className="btn-group flex-btn-group-container">
                    <Button
                      tag={Link}
                      to={`${match.url}/${user.id}`}
                      color="info"
                      size="sm"
                    >
                      <FontAwesomeIcon icon="eye" />{' '}
                      <span className="d-none d-md-inline">View</span>
                    </Button>
                    <Button
                      tag={Link}
                      to={`${match.url}/${user.id}/edit`}
                      color="primary"
                      size="sm"
                    >
                      <FontAwesomeIcon icon="pencil-alt" />{' '}
                      <span className="d-none d-md-inline">Edit</span>
                    </Button>
                    <Button
                      onClick={() => onConfirm(user.id)}
                      color="danger"
                      size="sm"
                      disabled={account.login === user.login}
                    >
                      <FontAwesomeIcon icon="trash" />{' '}
                      <span className="d-none d-md-inline">Delete</span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Row className="justify-content-center">
          <JhiPagination
            items={getPaginationItemsNumber(totalItems, itemsPerPage)}
            activePage={activePage}
            onSelect={handlePagination}
            maxButtons={5}
          />
        </Row>
      </div>
    );
  }
}
