import { CHANGE_NAME } from '../actions/types';

const initialState = {
  name: 'Aiden',
  email: 'test@test.com',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
