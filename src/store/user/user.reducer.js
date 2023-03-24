import { USER_ACTIONS_TYPE } from './user.types';

const initialState = {
  currentUser: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTIONS_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    //different from useReducer, here return previous/default state if unchanged
    default:
      return state;
  }
}
