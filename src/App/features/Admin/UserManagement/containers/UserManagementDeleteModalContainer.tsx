import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { IRootState } from '../../../../reducers/index';
import { selectUserManagementUser } from '../reducers';
import { getUser, deleteUser } from '../actions';
import { UserManagementDeleteModal } from '../components/UserManagementDeleteModal';

export interface IUserManagementDeleteModalProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export class UserManagementDeleteModalContainer extends React.Component<
  IUserManagementDeleteModalProps
> {
  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteUser(this.props.user.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { user } = this.props;

    return (
      <UserManagementDeleteModal
        user={user}
        handleClose={this.handleClose}
        confirmDelete={this.confirmDelete}
      />
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: selectUserManagementUser(state)
});

const mapDispatchToProps = { getUser, deleteUser };

type StateProps = ReturnType<typeof mapStateToProps | any>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagementDeleteModalContainer);
