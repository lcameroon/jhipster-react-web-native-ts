import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { getSortState, IPaginationBaseState } from 'react-jhipster';

import appConstants from '../../../../shared/constants';
import { getUsers, updateUser } from '../actions';
import { IRootState } from '../../../../reducers';
import { selectUserManagementUsers, selectUserManagementTotalItems } from '../reducers';
import { selectAuthUser } from '../../../../shared/reducers/auth.reducer';
import { UserManagementList } from '../components/UserManagementList';

export interface IUserManagementProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{}> {}

export class UserManagementListContainer extends React.Component<
  IUserManagementProps,
  IPaginationBaseState
> {
  state: IPaginationBaseState = {
    ...getSortState(this.props.location, appConstants.itemsPerPage)
  };

  componentDidMount() {
    this.getUsers();
  }

  sort = prop => () => {
    this.setState(
      {
        order: this.state.order === 'asc' ? 'desc' : 'asc',
        sort: prop
      },
      () => this.sortUsers()
    );
  };

  sortUsers() {
    this.getUsers();
    this.props.history.push(
      `${this.props.location.pathname}?page=${this.state.activePage}&sort=${
        this.state.sort
      },${this.state.order}`
    );
  }

  handlePagination = activePage => this.setState({ activePage }, () => this.sortUsers());

  getUsers = () => {
    const { activePage, itemsPerPage, sort, order } = this.state;
    this.props.getUsers(activePage - 1, itemsPerPage, `${sort},${order}`);
  };

  toggleActive = user => () => {
    this.props.updateUser({
      ...user,
      activated: !user.activated
    });
  };

  render() {
    const { users, account, match, totalItems } = this.props;
    return (
      <UserManagementList
        users={users}
        match={match}
        totalItems={totalItems}
        account={account}
        sort={this.sort}
        handlePagination={this.handlePagination}
        itemsPerPage={this.state.itemsPerPage}
        activePage={this.state.activePage}
        toggleActive={this.toggleActive}
      />
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  users: selectUserManagementUsers(state),
  totalItems: selectUserManagementTotalItems(state),
  account: selectAuthUser(state)
});

const mapDispatchToProps = { getUsers, updateUser };

type StateProps = ReturnType<typeof mapStateToProps | any>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagementListContainer);
