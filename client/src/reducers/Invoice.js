import { INVOICE_UPDATE } from '../actions/types';

const initialState = {
  newClient: false,
  selectedClient: '',
  name: '',
  email: '',
  projectName: '',
  billingFrequency: 'one-time',
  serviceDetail: '',
  price: '',
  id: 0,
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
