import { request, received, error } from '../shared/redux/baseActions';

import { FETCH_AUTH_SUCCESS, FETCH_AUTH_REQUEST, FETCH_AUTH_ERROR } from './actionTypes';
import AuthService from '../services/AuthService';

export const doLogin = (credentials) => async (dispatch) => {
  dispatch(request(FETCH_AUTH_REQUEST));
  try {
    const response = await AuthService.doLogin(credentials);
    dispatch(received(FETCH_AUTH_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_AUTH_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR', err.response);
  }
};

export const doRegister = (credentials) => async (dispatch) => {
  dispatch(request(FETCH_AUTH_REQUEST));
  try {
    const response = await AuthService.doLogin(credentials);
    dispatch(received(FETCH_AUTH_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_AUTH_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR', err.response);
  }
};
