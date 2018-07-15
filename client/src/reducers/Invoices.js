const initialState = [
  {
    user_id: 1,
    id: 1,
    sender_name: 'Jonny',
    to_email: 'test@test.com',
    project_name: 'Flex Ride',
    invoice_type: 'one-time',
    description: 'Flex Ride Flex Ride Flex Ride',
    total_cost: 100,
    status: 'paid',
  },
  {
    user_id: 1,
    id: 2,
    sender_name: 'James',
    to_email: 'test1@test.com',
    project_name: 'Flex Crow',
    invoice_type: 'one-time',
    description: 'Flex Crow Flex Crow Flex Crow',
    total_cost: 100,
    status: 'unpaid',
  },
  {
    user_id: 1,
    id: 3,
    sender_name: 'Gloria',
    to_email: 'test2@test.com',
    project_name: 'Flex Chain',
    invoice_type: 'one-time',
    description: 'Flex Chain Flex Chain Flex Chain',
    total_cost: 100,
    status: 'canceled',
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
