import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { IRootState } from './reducers';
import { setLocale } from './shared/reducers/locale.reducer';
import Header from './shared/components/Header';
import ErrorBoundary from './shared/helpers/error-boundary.helper';
import AppRoutes from './routes';

export interface IAppProps extends StateProps, DispatchProps {}

export class App extends React.Component<IAppProps> {
  componentDidMount() {}

  render() {
    const paddingTop = '80px';
    return (
      <Router>
        <div className="app-container" style={{ paddingTop }}>
          <ErrorBoundary>
            <Header
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

const mapStateToProps = ({ locale }: IRootState) => ({
  currentLocale: locale.currentLocale
});

const mapDispatchToProps = { setLocale };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
