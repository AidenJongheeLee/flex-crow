import fetchResource from '../utils/fetchResource';
import { CHANGE_NAME, CHANGE_TAB, INVOICE_UPDATE } from './types';

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
  return newName;
};

export const updateInvoice = ({ field, value }) => ({
  type: INVOICE_UPDATE,
  payload: { field, value },
});
