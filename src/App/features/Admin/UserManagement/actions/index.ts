import axios from 'axios';
import {
  ICrudGetAction,
  ICrudGetAllAction,
  ICrudPutAction,
  ICrudDeleteAction
} from 'react-jhipster';

import { IUser } from '../models/user.model';
import appConstants from '../../../../shared/constants';

export const ACTION_TYPES = {
  FETCH_ROLES: 'userManagement/FETCH_ROLES',
  FETCH_USERS: 'userManagement/FETCH_USERS',
  FETCH_USER: 'userManagement/FETCH_USER',
  CREATE_USER: 'userManagement/CREATE_USER',
  UPDATE_USER: 'userManagement/UPDATE_USER',
  DELETE_USER: 'userManagement/DELETE_USER',
  RESET: 'userManagement/RESET'
};

const apiUrl = 'api/users';
const { errorMessage } = appConstants;

// Actions
export const getUsers: ICrudGetAllAction<IUser> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_USERS,
    payload: axios.get<IUser>(requestUrl)
  };
};

export const getRoles = () => ({
  type: ACTION_TYPES.FETCH_ROLES,
  payload: axios.get(`${apiUrl}/authorities`)
});

export const getUser: ICrudGetAction<IUser> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_USER,
    payload: axios.get<IUser>(requestUrl)
  };
};

export const createUser: ICrudPutAction<IUser> = user => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_USER,
    payload: axios.post(apiUrl, user),
    meta: {
      successMessage: `User has been created successfully`,
      errorMessage
    }
  });
  dispatch(getUsers());
  return result;
};

export const updateUser: ICrudPutAction<IUser> = user => async dispatch => {
  const requestUrl = `${apiUrl}/${user.id}`;
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_USER,
    payload: axios.put(requestUrl, user),
    meta: {
      successMessage: `User has been updated successfully`,
      errorMessage
    }
  });
  dispatch(getUsers());
  return result;
};

export const deleteUser: ICrudDeleteAction<IUser> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_USER,
    payload: axios.delete(requestUrl),
    meta: {
      successMessage: `User has been deleted successfully`,
      errorMessage
    }
  });
  dispatch(getUsers());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
