import { ACTIONS_TYPE } from './cart.types';

const initialState = {
  toggleCart: false,
  cartItems: [],
  //   totalItems: 0,
  //   totalPrice: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS_TYPE.SET_TOGGLE_CART:
      return {
        ...state,
        toggleCart: action.payload,
      };
    case ACTIONS_TYPE.UPDATE_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
}
