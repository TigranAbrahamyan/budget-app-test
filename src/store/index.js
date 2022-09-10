import { legacy_createStore as createStore, combineReducers } from 'redux';

import { authReducer } from './reducers/auth';
import { balanceReducer } from './reducers/balance';
import { creditReducer } from './reducers/credit';

const reducers = combineReducers({
  auth: authReducer,
  balance: balanceReducer,
  credit: creditReducer,
});

export const store = createStore(reducers);
