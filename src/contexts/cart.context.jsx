import { createContext, useState } from 'react';

const defaultValue = {
  toogleCart: false,
  setToogleCart: function () {
    return null;
  },
};
export const CartContext = createContext(defaultValue);

export function CartProvider({ children }) {
  const [toogleCart, setToogleCart] = useState(false);
  const value = { toogleCart, setToogleCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
