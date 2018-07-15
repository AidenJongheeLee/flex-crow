const baseUrl = 'http://5d5eab99.ngrok.io';

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

const exports = {
  fetchInvoices,
  submitInvoice,
  cancelInvoice,
};

export default exports;
