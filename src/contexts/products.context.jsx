import { createContext, useEffect, useState } from 'react';
import productsData from '../mock-serviceAPI/shop-data.json';

const defaultValue = [];

//1. create context
export const ProductsContext = createContext(defaultValue);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(productsData);
  const value = { products };

  return (
    //2. create provider
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
