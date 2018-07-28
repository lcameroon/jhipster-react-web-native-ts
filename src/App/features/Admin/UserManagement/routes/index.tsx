import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from '../../../../shared/helpers/error-boundary-route.helper';
import UserManagement from '../containers/UserManagementListContainer';
import UserManagementDetail from '../containers/UserManagementDetailContainer';
import UserManagementUpdate from '../containers/UserManagementFormContainer';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute
        exact
        path={`${match.url}/new`}
        component={UserManagementUpdate}
      />
      <ErrorBoundaryRoute
        exact
        path={`${match.url}/:id/edit`}
        component={UserManagementUpdate}
      />
      <ErrorBoundaryRoute
        exact
        path={`${match.url}/:id`}
        component={UserManagementDetail}
      />
      <ErrorBoundaryRoute path={match.url} component={UserManagement} />
    </Switch>
  </>
);

export default Routes;
