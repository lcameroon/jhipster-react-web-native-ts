import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from './error-boundary.helper';

export const ErrorBoundaryRoute = ({ component: Component, ...rest }: RouteProps) => {
  const encloseInErrorBoundary = props => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );

  if (!Component) {
    throw new Error(`A component needs to be specified for path ${(rest as any).path}`);
  }

  return <Route {...rest} render={encloseInErrorBoundary} />;
};

export default ErrorBoundaryRoute;
