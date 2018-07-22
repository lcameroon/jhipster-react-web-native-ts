import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import homeReducer from '../features/Home/reducers';

export default combineReducers({
  form: formReducer,
  homeReducer
});
