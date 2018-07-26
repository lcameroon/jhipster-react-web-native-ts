import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { IRootState } from '../../../../reducers';
import { getUser, getRoles, updateUser, createUser, reset } from '../actions';
import {
  selectUserManagementAuthorities,
  selectUserManagementUpdating,
  selectUserManagementLoading,
  selectUserManagementUser
} from '../reducers';
import { UserManagementForm } from '../components/UserManagementForm';

export interface IUserManagementFormProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export interface IUserManagementFormState {
  isNew: boolean;
}

export class UserManagementFormContainer extends React.Component<
  IUserManagementFormProps,
  IUserManagementFormState
> {
  state: IUserManagementFormState = {
    isNew: !this.props.match.params || !this.props.match.params.id
  };

  componentDidMount() {
    if (!this.state.isNew) {
      this.props.getUser(this.props.match.params.id);
    }
    this.props.getRoles();
  }

  componentWillUnmount() {
    this.props.reset();
  }

  saveUser = (event, values) => {
    if (this.state.isNew) {
      this.props.createUser(values);
    } else {
      this.props.updateUser(values);
    }
    this.handleClose();
  };

  handleClose = () => {
    this.props.history.push('/admin/user-management');
  };

  render() {
    const { user, loading, updating, roles } = this.props;
    return (
      <UserManagementForm
        isNew={this.state.isNew}
        user={user}
        loading={loading}
        updating={updating}
        roles={roles}
        saveUser={this.saveUser}
      />
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: selectUserManagementUser(state),
  roles: selectUserManagementAuthorities(state),
  loading: selectUserManagementLoading(state),
  updating: selectUserManagementUpdating(state)
});

const mapDispatchToProps = { getUser, getRoles, updateUser, createUser, reset };

type StateProps = ReturnType<typeof mapStateToProps | any>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagementFormContainer);
