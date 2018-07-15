import {
  CHANGE_TAB,
  START_SUBMISSION,
  SUBMISSION_SUCCESS,
  SUBMISSION_ERROR,
} from '../actions/types';

const initialState = {
  currentTab: 1,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_SUBMISSION:
      return { ...state, loading: true };
    case SUBMISSION_SUCCESS:
      return { ...state, loading: false };
    case SUBMISSION_ERROR:
      return { ...state, loading: false };
    case CHANGE_TAB:
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
};
