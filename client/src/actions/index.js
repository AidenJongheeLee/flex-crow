import fetchResource from '../utils/fetchResource';
import {
  CHANGE_NAME,
  CHANGE_TAB,
  INVOICE_UPDATE,
  START_SUBMISSION,
  SUBMISSION_SUCCESS,
  SUBMISSION_ERROR,
} from './types';

export const changeTab = newTab => ({
  type: CHANGE_TAB,
  payload: newTab,
});

export const changeName = newName => ({
  type: CHANGE_NAME,
  payload: newName,
});

export const remoteChangeName = name => async (dispatch) => {
  const newName = await fetchResource.get(name);
  dispatch(changeName(newName));
};

export const submitInvoice = invoiceData => async (dispatch) => {
  dispatch({ type: START_SUBMISSION });
  try {
    await fetchResource.submitInvoice(invoiceData);
    dispatch({ type: SUBMISSION_SUCCESS });
  } catch (err) {
    console.log('err', err);
    dispatch({ type: SUBMISSION_ERROR });
  }
};

export const updateInovie = ({ field, value }) => ({
  type: INVOICE_UPDATE,
  payload: { field, value },
});
