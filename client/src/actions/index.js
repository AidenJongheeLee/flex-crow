import fetchResource from '../utils/fetchResource';
import {
  SET_INVOICES,
  CHANGE_TAB,
  INVOICE_UPDATE,
  START_REQUEST,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
} from './types';

export const changeTab = newTab => ({
  type: CHANGE_TAB,
  payload: newTab,
});

export const setInvoices = newName => ({
  type: SET_INVOICES,
  payload: newName,
});

export const fetchInvoices = name => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const newName = await fetchResource.fetchInvoices(name);
  dispatch({ type: REQUEST_SUCCESS });
  dispatch(setInvoices(newName));
};

export const submitInvoice = invoiceData => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  try {
    await fetchResource.submitInvoice(invoiceData);
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
