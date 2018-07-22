import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { IRootState } from '../../reducers';
import ErrorBoundary from './error-boundary.helper';

interface IOwnProps extends RouteProps {
  component?: any;
  hasAnyAuthorities?: string[];
}

export interface IPrivateRouteProps extends IOwnProps, StateProps {}

export const PrivateRouteComponent = ({
  component: Component,
  isAuthenticated,
  isAuthorized,
  hasAnyAuthorities = [],
  ...rest
}: IPrivateRouteProps) => {
  const checkAuthorities = props =>
    isAuthorized ? (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    ) : (
      <div className="insufficient-authority">
        <div className="alert alert-danger">
          You are not authorized to access this page.
        </div>
      </div>
    );

  const renderRedirect = props =>
    isAuthenticated ? (
      checkAuthorities(props)
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          search: props.location.search,
          state: { from: props.location }
        }}
      />
    );

  if (!Component) {
    throw new Error(
      `A component needs to be specified for private route for path ${(rest as any).path}`
    );
  }

  return <Route {...rest} render={renderRedirect} />;
};

export const hasAnyAuthority = (authorities: string[], hasAnyAuthorities: string[]) => {
  if (authorities && authorities.length !== 0) {
    if (hasAnyAuthorities.length === 0) {
      return true;
    }
    return hasAnyAuthorities.some(auth => authorities.includes(auth));
  }
  return false;
};

const mapStateToProps = (
  { authentication: { isAuthenticated, account } }: IRootState,
  { hasAnyAuthorities = [] }: IOwnProps
) => ({
  isAuthenticated,
  isAuthorized: hasAnyAuthority(account.authorities, hasAnyAuthorities)
});

type StateProps = ReturnType<typeof mapStateToProps>;

/**
 * A route wrapped in an authentication check so that routing happens only when you are authenticated.
 * Accepts same props as React router Route.
 * The route also checks for authorization if hasAnyAuthorities is specified.
 */
export const PrivateRoute = connect<StateProps, undefined, IOwnProps>(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(PrivateRouteComponent);

export default PrivateRoute;
