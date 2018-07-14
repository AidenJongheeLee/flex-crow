
import { CHANGE_NAME } from './types';

export const changeName = (newName) => {
  return {
    type: CHANGE_NAME,
    payload: newName
  };
};