import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { IRootState } from '../../../../reducers';
import { getUser } from '../actions';
import { selectUserManagementUser } from '../reducers';
import { UserManagementDetail } from '../components/UserManagementDetail';

export interface IUserManagementDetailProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export class UserManagementDetailContainer extends React.Component<
  IUserManagementDetailProps
> {
  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    const { user } = this.props;
    return <UserManagementDetail user={user} />;
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: selectUserManagementUser(state)
});

const mapDispatchToProps = { getUser };

type StateProps = ReturnType<typeof mapStateToProps | any>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagementDetailContainer);
