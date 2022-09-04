import { SET_NAME, SET_AUTH } from '../actions/types';

const initialState = {
  name: '',
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};
