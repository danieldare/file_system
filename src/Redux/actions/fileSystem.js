import { ADD_TYPE, DELETE_TYPE } from './types';

export const addType = payload => {
  return {
    type: ADD_TYPE,
    payload
  };
};

export const deleteType = payload => {
  return {
    type: DELETE_TYPE,
    payload
  };
};