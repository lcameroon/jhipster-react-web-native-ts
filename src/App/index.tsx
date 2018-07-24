import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { IRootState } from './reducers';
import { setLocale } from './shared/actions/locale.action';
import { getSession } from './shared/actions/auth.action';
import { hasAnyAuthority } from './shared/helpers/private-route.helper';
import appConstants from './shared/constants';
import Header from './shared/components/Header';
import ErrorBoundary from './shared/helpers/error-boundary.helper';
import AppRoutes from './routes';
import { selectCurrentLocale } from './shared/reducers/locale.reducer';
import {
  selectIsAuthenticated,
  selectUserAuthorities
} from './shared/reducers/auth.reducer';

export interface IAppProps extends StateProps, DispatchProps {}

export class App extends React.Component<IAppProps> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    const paddingTop = '80px';
    return (
      <Router>
        <div className="app-container" style={{ paddingTop }}>
          <ErrorBoundary>
            <Header
              isAuthenticated={this.props.isAuthenticated}
              isAdmin={this.props.isAdmin}
              currentLocale={this.props.currentLocale}
              onLocaleChange={this.props.setLocale}
            />
          </ErrorBoundary>
          <div className="container view-container" id="app-view-container">
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  currentLocale: selectCurrentLocale(state),
  isAuthenticated: selectIsAuthenticated(state),
  isAdmin: hasAnyAuthority(selectUserAuthorities(state), [appConstants.authorities.ADMIN])
});

const mapDispatchToProps = { setLocale, getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
