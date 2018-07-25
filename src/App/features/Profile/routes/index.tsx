import React from 'react';

import ErrorBoundaryRoute from '../../../shared/helpers/error-boundary-route.helper';

import Settings from '../containers/SettingsContainer';
import Password from '../containers/PasswordContainer';

const Routes = ({ match }) => (
  <div>
    <ErrorBoundaryRoute path={`${match.url}/settings`} component={Settings} />
    <ErrorBoundaryRoute path={`${match.url}/password`} component={Password} />
  </div>
);

export default Routes;
