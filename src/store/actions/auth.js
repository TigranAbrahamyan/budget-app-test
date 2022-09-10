import { SET_NAME, SET_AUTH } from '../actionTypes';

export const setUser = (payload) => ({
  type: SET_NAME,
  payload,
});

export const setIsAuth = (payload) => ({
  type: SET_AUTH,
  payload,
});
