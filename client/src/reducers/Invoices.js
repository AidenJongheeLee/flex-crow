const initialState = {
  invoices: [
    {
      id: 1,
      name: 'Jonny',
      email: 'test@test.com',
      projectName: 'Flex Ride',
      billingFrequency: 'one-time',
      serviceDetail: 'Flex Ride Flex Ride Flex Ride',
      price: 100,
    },
    {
      id: 2,
      name: 'Jame',
      email: 'test1@test.com',
      projectName: 'Flex Crow',
      billingFrequency: 'one-time',
      serviceDetail: 'Flex Crow Flex Crow Flex Crow',
      price: 100,
    },
    {
      id: 3,
      name: 'Gloria',
      email: 'test2@test.com',
      projectName: 'Flex Chain',
      billingFrequency: 'one-time',
      serviceDetail: 'Flex Chain Flex Chain Flex Chain',
      price: 100,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
