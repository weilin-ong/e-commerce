import { createContext, useEffect, useState } from 'react';

// import SHOP_DATA from '../mock-serviceAPI/shop-data.js';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';

const defaultValue = {
  categoriesMap: {},
};

//1. create context
export const CategoriesContext = createContext(defaultValue);

export function CategoriesProvider({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  //run only one time for data-scrapping
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    getCategoriesAndDocuments()
      .then((data) => setCategoriesMap(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    //2. create provider
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
