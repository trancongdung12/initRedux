import {combineReducers} from '@reduxjs/toolkit';
import cart from './product/cart';
import product from './product/product';
export const allReducers = combineReducers({
  cart: cart,
  product: product,
});
