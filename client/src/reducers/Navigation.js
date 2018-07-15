import {
  CHANGE_TAB,
  START_REQUEST,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
} from '../actions/types';

const initialState = {
  currentTab: 1,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_REQUEST:
      return { ...state, loading: true };
    case REQUEST_SUCCESS:
      return { ...state, loading: false };
    case REQUEST_ERROR:
      return { ...state, loading: false };
    case CHANGE_TAB:
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
};
