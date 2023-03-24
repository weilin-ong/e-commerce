import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './index.scss';
import App from './App';
// import { UserProvider } from './contexts/user.context2';
//import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context2';

import { Provider } from 'react-redux';
import { store, persistor } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* <CategoriesProvider> */}
          {/* <UserProvider> */}
          {/* <CartProvider> */}
          <App />
          {/* </CartProvider> */}
          {/* </UserProvider> */}
          {/* </CategoriesProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
