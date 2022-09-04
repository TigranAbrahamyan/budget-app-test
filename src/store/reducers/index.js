import { combineReducers } from 'redux';
import { authReducer } from './auth';

import { balanceReducer } from './balance';

export default combineReducers({
  auth: authReducer,
  balance: balanceReducer,
});
