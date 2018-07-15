import moment from 'moment';
import { INVOICE_UPDATE } from '../actions/types';

const initialState = {
  id: 0,
  project_name: '',
  duration: 0,
  created_at: '',
  due_date: moment().format('YYYY-MM-D'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INVOICE_UPDATE:
      console.log(action.payload);
      return { ...state, [action.payload.field]: action.payload.value };

    default:
      return state;
  }
};
