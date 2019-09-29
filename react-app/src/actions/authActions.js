import axios from 'axios';
import setAuthToken from '../utilities/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  SET_LOADING
} from './types';

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

// Load User
const loadUser = async dispatch => {
  console.log('LoadUser was called');
  setLoading();
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/v1/auth');

    console.log('loadUser:', res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = formData => async dispatch => {
  setLoading();
  try {
    const res = await axios.post('/api/v1/users', formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    loadUser(dispatch);
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.message
    });
  }
};

// Login User
export const login = formData => async dispatch => {
  setLoading();
  try {
    const res = await axios.post('/api/v1/auth', formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    loadUser(dispatch);
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message
    });
  }
};

// Logout
export const logout = () => {
  return {
    type: LOGOUT
  };
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
