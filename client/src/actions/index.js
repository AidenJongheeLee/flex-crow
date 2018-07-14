import { CHANGE_NAME, CHANGE_TAB, INVOICE_UPDATE } from './types';

export const changeName = newName => ({
  type: CHANGE_NAME,
  payload: newName,
});

export const changeTab = newTab => ({
  type: CHANGE_TAB,
  payload: newTab,
});

export const updateInovie = ({ field, value }) => ({
  type: INVOICE_UPDATE,
  payload: { field, value },
});
