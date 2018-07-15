import { invoices } from './fakeResponses';

const baseUrl = 'https://a5c9c29c.ngrok.io';

const fetchInvoices = async () => {
  try {
    const data = await (await fetch(`${baseUrl}/invoices`)).json();
    console.log('index response', data);
    return await Promise.resolve(data);
  } catch (error) {
    console.log('Error while fetching invoices', error);
    return error;
  }
};

const cancelInvoice = async (id) => {
  try {
    const data = await (await fetch(`${baseUrl}/invoice/cancel/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })).json();
    console.log('response from cancel', data);
    return await Promise.resolve('Great Success');
  } catch (error) {
    console.log('Error while fetching invoices');
    return error;
  }
};

const fetchInvoicePayments = async (id) => {
  try {
    const data = await (await fetch(`${baseUrl}/invoice/${id}/payments`)).json();
    console.log('response from fetch payments', data);
    return await Promise.resolve('Great Success');
  } catch (error) {
    console.log('Error while fetching invoices');
    return error;
  }
};

const submitInvoice = async (invoiceData) => {
  try {
    const wasPostSuccessFul = await fetch(`${baseUrl}/invoices`, {
      method: 'POST',
      body: JSON.stringify(invoiceData),
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

const submitPayment = async (invoiceId, amount) => {
  const body = {
    payment: {
      amount,
      paid: true,
    },
  };
  try {
    const wasPostSuccessFul = await fetch(`${baseUrl}/invoice/${invoiceId}/payments`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('yaas');
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
  submitPayment,
  cancelInvoice,
  fetchInvoicePayments,
};

export default exports;
