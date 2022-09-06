import { UPDATE_BALANCE, TAKE_CREDIT } from '../actions/types';
import { BALANCE_ACTIVITY_TYPES } from '../../utils/types';

const initialState = {
  total: 0,
  history: [],
};

export const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BALANCE:
      const { inputSum, activityType } = action.payload;

      return {
        ...state,
        total: activityType === BALANCE_ACTIVITY_TYPES.INCOME ? state.total + Number(inputSum) : state.total - Number(inputSum),
        history: [
          ...state.history,
          { id: Date.now(), sum: inputSum, type: activityType },
        ],
      };
    case TAKE_CREDIT:
      return {
        ...state,
        total: state.total + Number(action.payload),
        history: [
          ...state.history,
          { id: Date.now(), sum: action.payload, type: BALANCE_ACTIVITY_TYPES.INCOME },
        ],
      };
    default:
      return state;
  }
};
