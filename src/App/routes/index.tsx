import React from 'react';
import { Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Login from '../features/Login/containers/LoginContainer';
import Register from '../features/Profile/containers/RegisterContainer';
import Logout from '../features/Login/containers/LogoutContainer';
import Home from '../features/Home/containers/HomeContainer';
import PrivateRoute from '../shared/helpers/private-route.helper';
import ErrorBoundaryRoute from '../shared/helpers/error-boundary-route.helper';
import appConstants from '../shared/constants';

const Profile = Loadable({
  loader: () => import('../features/Profile/routes'),
  loading: () => <div>Loading ...</div>
});

const Admin = Loadable({
  loader: () => import('../features/Admin/routes'),
  loading: () => <div>Loading ...</div>
});

const Routes = () => (
  <div className="view-routes">
    <ErrorBoundaryRoute path="/login" component={Login} />
    <Switch>
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      <ErrorBoundaryRoute path="/register" component={Register} />
      <PrivateRoute
        path="/admin"
        component={Admin}
        hasAnyAuthorities={[appConstants.authorities.ADMIN]}
      />
      <PrivateRoute
        path="/profile"
        component={Profile}
        hasAnyAuthorities={[
          appConstants.authorities.ADMIN,
          appConstants.authorities.USER
        ]}
      />
      <ErrorBoundaryRoute path="/" component={Home} />
    </Switch>
  </div>
);

export default Routes;
