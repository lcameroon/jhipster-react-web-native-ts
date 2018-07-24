/* tslint:disable:no-invalid-this */
import color from './colors';
import components from './components';

export default {
  ...components,
  colors: {
    primary: color.blue,
    secondary: color.gray600,
    success: color.green,
    info: color.cyan,
    warning: color.yellow,
    danger: color.red,
    light: color.gray100,
    dark: color.gray800
  },
  bodyBg: color.white,
  bodyColor: color.gray900,
  gutter: 10
};
