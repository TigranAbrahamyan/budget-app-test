import { SET_NAME, SET_AUTH } from '../actions/types';

export const setUser = (payload) => ({
  type: SET_NAME,
  payload,
});

export const setIsAuth = (payload) => ({
  type: SET_AUTH,
  payload,
});
