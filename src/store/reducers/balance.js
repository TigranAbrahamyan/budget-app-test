import { UPDATE_BALANCE } from '../actionTypes';
import { BALANCE_ACTIVITY_TYPES } from '../../utils/constants';

const initialState = {
  total: 0,
  history: [],
};

export const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BALANCE:
      const { inputSum, activityType, expenseCategory = '' } = action.payload;

      return {
        ...state,
        total: activityType === BALANCE_ACTIVITY_TYPES.INCOME ? state.total + inputSum : state.total - inputSum,
        history: [
          ...state.history,
          { id: Date.now(), sum: inputSum, type: activityType, expenseCategory },
        ],
      };
    default:
      return state;
  }
};
