import { createContext, useEffect, useState } from 'react';

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

export const CartContext = createContext(defaultValue);

export function CartProvider({ children }) {
  const [toggleCart, setToggleCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalItem = cartItems.reduce(
      (prev, curr) => prev + curr.quantity,
      0
    );
    setTotalItems(newTotalItem);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (prev, curr) => prev + curr.quantity * curr.price,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  function addItemToCart(productItem) {
    setCartItems((prevCart) => addItems(prevCart, productItem));
  }

  function removeItemFromCart(productItem) {
    setCartItems((prevCart) => removeItems(prevCart, productItem));
  }

  function deleteItem(productItem) {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== productItem.id)
    );
  }

  const value = {
    toggleCart,
    setToggleCart,
    addItemToCart,
    cartItems,
    totalItems,
    removeItemFromCart,
    deleteItem,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
