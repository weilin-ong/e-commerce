import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import categoriesReducer from './categories/categories.reducer';
import cartReducer from './cart/cart.reducer';

// unlike useReducer, redux combine all reducers as one, action pass to every reducer
// store is a new obj again when one of the reducer gets updated/called
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
