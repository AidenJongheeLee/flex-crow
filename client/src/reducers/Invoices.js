import { SET_INVOICES } from '../actions/types';

const initialState = {
  invoices: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INVOICES:
      return { ...state, invoices: action.payload };
    default:
      return state;
  }
};
