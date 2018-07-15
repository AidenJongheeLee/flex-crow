const getInvoices = async (name) => {
  const data = await (await fetch('http://127.0.0.1:5000')).json();
  return `${name} fetched: ${data.bob}`;
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
  getInvoices,
  submitInvoice,
};

export default exports;
