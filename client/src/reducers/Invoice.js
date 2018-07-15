import { INVOICE_UPDATE } from '../actions/types';

const initialState = {
  newClient: false,
  selectedClient: '',
  id: 0,
  user_id: 1,
  sender_name: '',
  to_email: '',
  project_name: '',
  invoice_type: 'One-time',
  description: '',
  total_cost: 0,
  status: 'unpaid',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INVOICE_UPDATE:
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
};
