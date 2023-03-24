import { createContext, useReducer } from 'react';

const defaultValue = {
  toggleCart: false,
  setToggleCart: function () {
    return null;
  },
  cartItems: [],
  addItemToCart: function () {
    return null;
  },
  totalItems: 0,
  totalPrice: 0,
  removeItemFromCart: () => {
    return null;
  },
  deleteItem: () => {
    return null;
  },
};

//constant action
const ACTIONS_TYPE = {
  UPDATE_CART_ITEMS: 'UPDATE_CART_ITEMS',
  SET_TOGGLE_CART: 'SET_TOGGLE_CART',
};

function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS_TYPE.SET_TOGGLE_CART:
      return {
        ...state,
        toggleCart: action.payload,
      };
    case ACTIONS_TYPE.UPDATE_CART_ITEMS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return new Error(`Unhandled type ${action.type} in reducer`);
  }
}

export const CartContext = createContext(defaultValue);

export function CartProvider({ children }) {
  //setup useReducer with reducer func and initial val, returns a state and dispatch func to update state
  const [state, dispatch] = useReducer(cartReducer, {
    toggleCart: false,
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
  });

  function toggleCartReducer(bool) {
    dispatch({ type: ACTIONS_TYPE.SET_TOGGLE_CART, payload: bool });
  }

  //one function to update add, delete and remove, total items and total price
  function updateCartReducer(newCartItems) {
    const newTotalItem = newCartItems.reduce(
      (prev, curr) => prev + curr.quantity,
      0
    );
    const newTotalPrice = newCartItems.reduce(
      (prev, curr) => prev + curr.quantity * curr.price,
      0
    );
    dispatch({
      type: ACTIONS_TYPE.UPDATE_CART_ITEMS,
      payload: {
        totalItems: newTotalItem,
        totalPrice: newTotalPrice,
        cartItems: newCartItems,
      },
    });
  }

  function addItemToCart(productItem) {
    const newCartItems = addItems(state.cartItems, productItem);
    updateCartReducer(newCartItems);
  }

  function removeItemFromCart(productItem) {
    const newCartItems = removeItems(state.cartItems, productItem);
    updateCartReducer(newCartItems);
  }

  function deleteItem(productItem) {
    const newCartItems = state.cartItems.filter(
      (item) => item.id !== productItem.id
    );
    updateCartReducer(newCartItems);
  }

  function addItems(cartItems, productItem) {
    const foundItem = cartItems.find((item) => item.id === productItem.id);

    if (foundItem)
      return cartItems.map((item) =>
        item.id === foundItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
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

  const value = {
    toggleCart: state.toggleCart,
    setToggleCart: toggleCartReducer,
    addItemToCart,
    cartItems: state.cartItems,
    totalItems: state.totalItems,
    removeItemFromCart,
    deleteItem,
    totalPrice: state.totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
