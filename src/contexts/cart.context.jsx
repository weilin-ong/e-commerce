import { createContext, useEffect, useState } from 'react';

const defaultValue = {
  toogleCart: false,
  setToogleCart: function () {
    return null;
  },
  cartItems: [],
  addItemToCart: function () {
    return null;
  },
  totalItems: 0,
};

function checkItems(cartItems, productItem) {
  const foundItem = cartItems.find((item) => item.id === productItem.id);

  if (foundItem)
    return cartItems.map((item) =>
      item.id === foundItem.id ? { ...item, quantity: item.quantity++ } : item
    );

  return [...cartItems, { ...productItem, quantity: 1 }];
}

export const CartContext = createContext(defaultValue);

export function CartProvider({ children }) {
  const [toogleCart, setToogleCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
    setTotalItems(newTotal);
  }, [cartItems]);

  function addItemToCart(productItem) {
    setCartItems((prevCart) => checkItems(prevCart, productItem));
  }

  const value = {
    toogleCart,
    setToogleCart,
    addItemToCart,
    cartItems,
    totalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
