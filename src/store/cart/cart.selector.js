import { createSelector } from 'reselect';

function selectCartReducer(state) {
  return state.cart;
}

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectToggleCart = createSelector(
  [selectCartReducer],
  (cart) => cart.toggleCart
);

export const selectTotalItem = createSelector(
  [selectCartItems],
  (newCartItems) => newCartItems.reduce((prev, curr) => prev + curr.quantity, 0)
);
export const selectTotalPrice = createSelector(
  [selectCartItems],
  (newCartItems) =>
    newCartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)
);
