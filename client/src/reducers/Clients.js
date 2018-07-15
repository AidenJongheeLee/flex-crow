import { LOAD_CLIENTS } from '../actions/types';

const INITIAL_STATE = [{ id: '1', name: 'James Kropp', email: 'james@project.jameskropp.com' }];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_CLIENTS:
      return action.payload;
    default:
      return state;
  }
};
