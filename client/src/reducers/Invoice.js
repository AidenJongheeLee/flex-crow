import { INVOICE_UPDATE } from '../actions/types';

const initialState = {
  clientSelect: '',
  name: '',
  email: '',
  projectName: '',
  billedSelect: 1,
  serviceDetail: '',
  price: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INVOICE_UPDATE:
      return { ...state, [action.payload.field]: action.payload.value };

    default:
      return state;
  }
};
