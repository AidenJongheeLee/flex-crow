import { CHANGE_NAME, CHANGE_TAB } from './types';

export const changeName = newName => ({
  type: CHANGE_NAME,
  payload: newName,
});

export const changeTab = newTab => ({
  type: CHANGE_TAB,
  payload: newTab,
});
