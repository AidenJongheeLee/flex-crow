import { SELECT_TIMELOG } from '../actions/types';

const initialState = {
  timeLogs: [
    {
      id: 1,
      project_name: 'Flex Ride',
      duration: 15,
      created_at: '06/17',
    },
    {
      id: 2,
      project_name: 'Flex Crow',
      duration: 10,
      created_at: '08/17',
    },
  ],
  selected: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TIMELOG:
      console.log(action.payload);
      return { ...state, selected: action.payload };

    default:
      return state;
  }
};
