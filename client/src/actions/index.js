import fetchResource from '../utils/fetchResource';
import {
  SET_INVOICES,
  CHANGE_TAB,
  INVOICE_UPDATE,
  START_REQUEST,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
  SELECT_TIMELOG,
} from './types';

export const changeTab = newTab => ({
  type: CHANGE_TAB,
  payload: newTab,
});

export const setInvoices = newName => ({
  type: SET_INVOICES,
  payload: newName,
});

export const fetchInvoices = () => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const newName = await fetchResource.fetchInvoices();
  dispatch({ type: REQUEST_SUCCESS });
  dispatch(setInvoices(newName));
};

export const cancelInvoice = id => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  await fetchResource.cancelInvoice(id);
  dispatch({ type: REQUEST_SUCCESS });
  fetchInvoices();
};

export const fetchInvoicePayments = id => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  await fetchResource.fetchInvoicePayments(id);
  dispatch({ type: REQUEST_SUCCESS });
  fetchInvoices();
};

export const submitInvoice = invoiceData => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  try {
    await fetchResource.submitInvoice(invoiceData);
    dispatch({ type: REQUEST_SUCCESS });
    window.location.reload();
  } catch (err) {
    console.log('err', err);
    dispatch({ type: REQUEST_ERROR });
  }
};

export const submitPayment = (invoiceId, amount) => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  try {
    await fetchResource.submitPayment(invoiceId, amount);
    dispatch({ type: REQUEST_SUCCESS });
  } catch (err) {
    console.log('err', err);
    dispatch({ type: REQUEST_ERROR });
  }
};

export const updateInvoice = ({ field, value }) => ({
  type: INVOICE_UPDATE,
  payload: { field, value },
});

export const selectTimeLog = selected => ({
  type: SELECT_TIMELOG,
  payload: selected,
});
