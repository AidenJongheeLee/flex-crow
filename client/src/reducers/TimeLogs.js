import { SELECT_TIMELOG } from '../actions/types';

const initialState = {
  timeLogs: [
    {
      id: 1,
      project_name: 'Flex Ride',
      duration: 15,
      created_at: 'June 16th',
    },
    {
      id: 2,
      project_name: 'Flex Crow',
      duration: 10,
      created_at: 'Jul 12th',
    },
  ],
  selected: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TIMELOG:
      return { ...state, selected: action.payload };

    default:
      return state;
  }
};
