import React from 'react';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './src/App';
import initStore from './src/App/store';
import NativeRoutes from './src/App/routes/index.native';
import setupAxiosInterceptors from './src/App/shared/interceptors/axios.interceptor';
import { clearAuthentication } from './src/App/shared/actions/auth.action';
import { setContainer } from './src/App/routes/utils.native';

const store = initStore();
const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('error.http.403'));

export default class NativeApp extends App {
  render() {
    return (
      <Provider store={store}>
        <NativeRoutes
          ref={(navigatorRef: any) => {
            setContainer(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
