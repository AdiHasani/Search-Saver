import axios from 'axios';
import setAuthToken from '../utilities/setAuthToken';
import {
  GET_DATA,
  ADD_SEARCH,
  DELETE_SEARCH,
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

export const getSearches = () => async dispatch => {
  try {
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

export const addSearches = search => async dispatch => {
  try {
    const res = await axios.post('/api/v1/search', search, config);

    dispatch({
      type: ADD_SEARCH,
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
    const res = await axios.put(`/api/contacts/${query._id}`, contact, config);

    dispatch({
      type: UPDATE_QUERY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: err.response.msg
    });
  }
};

export const clearSearches = () => {
  dispatch({ type: CLEAR_SEARCHES });
};

export const setCurrent = query => {
  dispatch({ type: SET_CURRENT, payload: query });
};

export const clearCurrent = () => {
  dispatch({ type: CLEAR_CURRENT });
};

export const filterSearches = text => {
  dispatch({ type: FILTER_SEARCHES, payload: text });
};

export const clearFilter = () => {
  dispatch({ type: CLEAR_FILTER });
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
