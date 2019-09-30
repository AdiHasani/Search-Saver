import axios from 'axios';
import setAuthToken from '../utilities/setAuthToken';
import {
  GET_DATA,
  GET_SEARCHES,
  SAVE_SEARCH,
  DELETE_SEARCH,
  UPDATE_STATE_QUERIES,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_QUERY,
  FILTER_SEARCHES,
  CLEAR_SEARCHES,
  CLEAR_FILTER,
  SEARCH_ERROR,
  SET_LOADING
} from './types';

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export const getData = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    dispatch(setLoading());
    const res = await axios.get('/api/v1/search');

    dispatch({
      type: GET_DATA,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: err.response.message
    });
  }
};

export const searchTwitter = query => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    dispatch(setLoading());
    console.log('QUERYYYY:', query);
    const res = await axios.post('/api/v1/search/tweets', { query }, config);

    dispatch({
      type: GET_SEARCHES,
      payload: res.data.data
    });
    dispatch({
      type: UPDATE_STATE_QUERIES,
      payload: query
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: err.response.message
    });
  }
};

export const saveSearche = search => async dispatch => {
  try {
    const res = await axios.post('/api/v1/search', search, config);

    dispatch({
      type: SAVE_SEARCH,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: err.response.message
    });
  }
};

export const deleteQuery = id => async dispatch => {
  try {
    await axios.delete(`/api/v1/search/${id}`);

    dispatch({
      type: DELETE_SEARCH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: err.response.message
    });
  }
};

export const updateQuery = query => async dispatch => {
  try {
    const res = await axios.put(`/api/v1/search/${query._id}`, query, config);

    dispatch({
      type: UPDATE_QUERY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: err.response.message
    });
  }
};

export const clearSearches = () => dispatch => {
  dispatch({ type: CLEAR_SEARCHES });
};

export const setCurrent = query => dispatch => {
  dispatch({ type: SET_CURRENT, payload: query });
};

export const clearCurrent = () => dispatch => {
  dispatch({ type: CLEAR_CURRENT });
};

export const filterSearches = text => dispatch => {
  dispatch({ type: FILTER_SEARCHES, payload: text });
};

export const clearFilter = () => dispatch => {
  dispatch({ type: CLEAR_FILTER });
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
