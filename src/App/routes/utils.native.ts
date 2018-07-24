/**
 * Solution to use navigation outside of React component
 * https://github.com/react-navigation/react-navigation/issues/1439
 */
import { NavigationActions } from 'react-navigation';

export interface INavigationProps {
  match?: any;
  history?: any;
  location?: any;
  navigation?: any;
}

export interface IUrl {
  path: string;
  params?: object;
}

let _container: any;

export const setContainer = (container: any) => {
  _container = container;
};

export const reset = (routeName: string, params?: any) => {
  _container.dispatch(
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName,
          params
        })
      ]
    })
  );
};

export const navigate = (url: IUrl) => {
  _container.dispatch(
    NavigationActions.navigate({
      type: 'Navigation/NAVIGATE',
      routeName: url.path,
      params: url.params
    })
  );
};

export function navigateDeep(actions: IUrl[]) {
  _container.dispatch(
    actions.reduceRight(
      (prevAction, action): any =>
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName: action.path,
          params: action.params,
          action: prevAction
        }),
      undefined
    )
  );
}

export function getCurrentRoute(): any {
  if (!_container || !_container.state.nav) {
    return null;
  }
  return _container.state.nav.routes[_container.state.nav.index] || null;
}

export const getCurrentNavigationParams = (props: INavigationProps) => {
  return props.navigation.state.params;
};
