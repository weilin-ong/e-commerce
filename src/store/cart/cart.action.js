import { ACTIONS_TYPE } from './cart.types';

export function setToggleCart(bool) {
  return { type: ACTIONS_TYPE.SET_TOGGLE_CART, payload: bool };
}

export function addItemToCart(cartItems, productItem) {
  const newCartItems = addItems(cartItems, productItem);
  return updateCartReducer(newCartItems);
}

export function removeItemFromCart(cartItems, productItem) {
  const newCartItems = removeItems(cartItems, productItem);
  return updateCartReducer(newCartItems);
}

export function deleteItem(cartItems, productItem) {
  const newCartItems = cartItems.filter((item) => item.id !== productItem.id);
  return updateCartReducer(newCartItems);
}

//one function to update add, delete and remove, total items and total price
function updateCartReducer(newCartItems) {
  return {
    type: ACTIONS_TYPE.UPDATE_CART_ITEMS,
    payload: newCartItems,
  };
}
function addItems(cartItems, productItem) {
  const foundItem = cartItems.find((item) => item.id === productItem.id);

  if (foundItem)
    return cartItems.map((item) =>
      item.id === foundItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );

  return [...cartItems, { ...productItem, quantity: 1 }];
}

function removeItems(cartItems, productItem) {
  const foundItem = cartItems.find((item) => item.id === productItem.id);

  if (foundItem.quantity === 1)
    return cartItems.filter((item) => item.id !== foundItem.id);

  return cartItems.map((item) =>
    item.id === foundItem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
}
