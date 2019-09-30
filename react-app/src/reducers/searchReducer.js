import {
  GET_DATA,
  SAVE_SEARCH,
  DELETE_SEARCH,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_QUERY,
  FILTER_SEARCHES,
  CLEAR_SEARCHES,
  CLEAR_FILTER,
  SEARCH_ERROR,
  SET_LOADING
} from '../actions/types';

const initialState = {
  data: [],
  loading: false,
  current: null,
  filtered: null,
  error: null
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case GET_DATA:
      return {
        ...state,
        loading: false,
        data: actions.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
