import { UPDATE_CREDIT } from '../actionTypes';
import { CREDIT_ACTIVITY_TYPES } from '../../utils/constants';

const initialState = {
  total: 0,
  history: [],
};

export const creditReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CREDIT:
      const { inputSum, activityType } = action.payload;

      return {
        ...state,
        total: activityType === CREDIT_ACTIVITY_TYPES.TAKE ? state.total + inputSum : state.total - inputSum,
        history: [
          ...state.history,
          { id: Date.now(), sum: inputSum, type: activityType },
        ],
      };
    default:
      return state;
  }
};
