import React from 'react';
import Loadable from 'react-loadable';

import PrivateRoute from '../../../shared/helpers/private-route.helper';
import appConstants from '../../../shared/constants';

const UserManagement = Loadable({
  loader: () => import('../UserManagement/routes'),
  loading: () => <div>Loading ...</div>
});

const Routes = ({ match }) => (
  <PrivateRoute
    path="/admin/user-management"
    component={UserManagement}
    hasAnyAuthorities={[appConstants.authorities.ADMIN]}
  />
);

export default Routes;
