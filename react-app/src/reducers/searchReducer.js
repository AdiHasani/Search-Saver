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
  SEARCH_ERROR
} from '../actions/types';

const initialState = {};

export default (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};
