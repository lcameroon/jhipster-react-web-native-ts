import React from 'react';

import ErrorBoundaryRoute from '../../../shared/helpers/error-boundary-route.helper';

import Settings from '../components/Settings';
import Password from '../components/Password';

const Routes = ({ match }) => (
  <div>
    <ErrorBoundaryRoute path={`${match.url}/settings`} component={Settings} />
    <ErrorBoundaryRoute path={`${match.url}/password`} component={Password} />
  </div>
);

export default Routes;
