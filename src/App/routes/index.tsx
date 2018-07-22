import React from 'react';
import { Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';

// import Login from 'app/features/login/login';
// import Register from 'app/features/account/register/register';
// import Activate from 'app/features/account/activate/activate';
// import PasswordResetInit from 'app/features/account/password-reset/init/password-reset-init';
// import PasswordResetFinish from 'app/features/account/password-reset/finish/password-reset-finish';
// import Logout from 'app/features/login/logout';
import Dashboard from '../features/Home/components/Dashboard';
// import PrivateRoute from '../shared/helpers/private-route.helper';
import ErrorBoundaryRoute from '../shared/helpers/error-boundary-route.helper';
// import { AUTHORITIES } from '../shared/constants';

// const Account = Loadable({
//   loader: () => import('app/features/account'),
//   loading: () => <div>loading ...</div>
// });

// const Admin = Loadable({
//   loader: () => import('app/features/admin'),
//   loading: () => <div>loading ...</div>
// });

const Routes = () => (
  <div className="view-routes">
    {/* <ErrorBoundaryRoute path="/login" component={Login} /> */}
    <Switch>
      {/* <ErrorBoundaryRoute path="/logout" component={Logout} />
      <ErrorBoundaryRoute path="/register" component={Register} />
      <ErrorBoundaryRoute path="/activate/:key?" component={Activate} />
      <ErrorBoundaryRoute path="/reset/request" component={PasswordResetInit} />
      <ErrorBoundaryRoute path="/reset/finish/:key?" component={PasswordResetFinish} />
      <PrivateRoute
        path="/admin"
        component={Admin}
        hasAnyAuthorities={[AUTHORITIES.ADMIN]}
      />
      <PrivateRoute
        path="/account"
        component={Account}
        hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]}
      /> */}
      <ErrorBoundaryRoute path="/" component={Dashboard} />
    </Switch>
  </div>
);

export default Routes;
