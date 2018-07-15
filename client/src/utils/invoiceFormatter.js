export const invoiceModel = {
  id: 1,
  user_id: 1,
  to_email: 'xflat@hotmail.ca',
  project_name: 'Flex Bill Development',
  description: 'Back-end development on the user system',
  invoice_type: 'once',
  total_cost: 99,
  paid: true,
  status: 'paid',
  created_at: '2018-07-15T00:17:19.000Z',
  updated_at: '2018-07-15T00:22:39.000Z',
  sender_name: null,
};

export const invoiceState = {
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
