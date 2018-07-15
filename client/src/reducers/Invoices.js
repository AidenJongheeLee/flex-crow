import { SET_INVOICES } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INVOICES:
      return action.payload;
    default:
      return state;
  }
};
