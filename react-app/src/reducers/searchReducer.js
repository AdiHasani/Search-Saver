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
} from '../actions/types';

const initialState = {
  data: {},
  loading: false,
  current: null,
  search: [],
  filtered: null,
  errorSearch: null
};

function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues);
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_SEARCHES:
      return {
        ...state,
        loading: false,
        search: action.payload
      };
    case SAVE_SEARCH:
      const search = state.data.search.concat(action.payload);
      return {
        ...state,
        data: updateObject(state.data, { search })
      };
    case CLEAR_SEARCHES:
      return {
        ...state,
        search: []
      };
    case UPDATE_STATE_QUERIES:
      const queries = state.data.queries.concat({
        query: action.payload,
        _id: String(Math.floor(Math.random() * 10000000))
      });
      const allQueries = state.data.allQueries.concat({
        query: action.payload,
        _id: String(Math.floor(Math.random() * 10000000))
      });
      return {
        ...state,
        data: updateObject(state.data, { queries, allQueries })
      };
    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        errorSearch: action.payload
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
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
