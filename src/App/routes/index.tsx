import React from 'react';
import { Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Login from '../features/Login/components/Login';
import Register from '../features/Account/components/Register';
import Logout from '../features/Login/components/Logout';
import Dashboard from '../features/Home/components/Dashboard';
import PrivateRoute from '../shared/helpers/private-route.helper';
import ErrorBoundaryRoute from '../shared/helpers/error-boundary-route.helper';
import appConstants from '../shared/constants';

const Account = Loadable({
  loader: () => import('../features/Account/routes'),
  loading: () => <div>Loading ...</div>
});

// const Admin = Loadable({
//   loader: () => import('app/features/admin'),
//   loading: () => <div>loading ...</div>
// });

const Routes = () => (
  <div className="view-routes">
    <ErrorBoundaryRoute path="/login" component={Login} />
    <Switch>
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      <ErrorBoundaryRoute path="/register" component={Register} />
      {/* <PrivateRoute
        path="/admin"
        component={Admin}
        hasAnyAuthorities={[appConstants.authorities.ADMIN]}
      /> */}
      <PrivateRoute
        path="/account"
        component={Account}
        hasAnyAuthorities={[
          appConstants.authorities.ADMIN,
          appConstants.authorities.USER
        ]}
      />
      <ErrorBoundaryRoute path="/" component={Dashboard} />
    </Switch>
  </div>
);

export default Routes;
