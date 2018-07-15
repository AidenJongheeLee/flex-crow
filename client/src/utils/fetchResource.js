import fakeReponses from './fakeResponses';

const baseUrl = 'http://5d5eab99.ngrok.io';
console.log('baseUrl');

const fetchInvoices = async () => {
  try {
    const data = await (await fetch(`${baseUrl}/invoices`)).json();
    console.log('index response', data);
    return await Promise.resolve(data);
  } catch (error) {
    console.log('Error while fetching invoices');
    return error;
  }
};

const cancelInvoice = async (id) => {
  try {
    const data = await (await fetch(`${baseUrl}/invoice/cancel${id}`)).json();
    console.log('response from cancel', data);
    return await Promise.resolve('Great Success');
  } catch (error) {
    console.log('Error while fetching invoices');
    return error;
  }
};

const submitInvoice = async (invoiceData) => {
  try {
    const wasPostSuccessFul = await fetch('http://127.0.0.1:5000', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(invoiceData), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return wasPostSuccessFul.json();
  } catch (error) {
    console.log('there was an error when submitting');
    console.log(error);
    return error;
  }
};

const exports = {
  fetchInvoices,
  submitInvoice,
};

export default exports;
