import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppContainer } from 'react-hot-loader';

import appConstants from './App/shared/constants';
import initStore from './App/store';
import DevTools from './App/shared/helpers/devtools.helper';
import ErrorBoundary from './App/shared/helpers/error-boundary.helper';
import setupAxiosInterceptors from './App/shared/interceptors/axios.interceptor';
import { clearAuthentication } from './App/shared/actions/auth.action';
import { registerLocale } from './App/shared/utils/translation.util';
import { loadIcons } from './App/shared/utils/icon-loader.util';
import registerServiceWorker from './register-service-worker';

import AppComponent from './App';

const devTools = appConstants.isDev ? <DevTools /> : null;
const store = initStore();
const actions = bindActionCreators({ clearAuthentication }, store.dispatch);

setupAxiosInterceptors(() => actions.clearAuthentication('error.http.403'));
registerLocale(store);
loadIcons();
registerServiceWorker();

// boostrap
ReactDOM.render(
  <ErrorBoundary>
    <AppContainer>
      <Provider store={store}>
        <div>
          {/* If this slows down the app in dev disable it and enable when required  */}
          {devTools}
          <AppComponent />
        </div>
      </Provider>
    </AppContainer>
  </ErrorBoundary>,
  document.getElementById('root')
);
