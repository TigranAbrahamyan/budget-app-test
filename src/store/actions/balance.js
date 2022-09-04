import { UPDATE_BALANCE, TAKE_CREDIT } from './types';

export const updateBalance = (payload) => ({
  type: UPDATE_BALANCE,
  payload,
});

export const takeCredit = (payload) => ({
  type: TAKE_CREDIT,
  payload,
});
