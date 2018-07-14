import { CHANGE_NAME, CHANGE_TAB } from './types';

export const changeName = newName => ({
  payload: newName,
  type: CHANGE_NAME,
});

export const changeTab = newName => ({
  payload: newName,
  type: CHANGE_TAB,
});
