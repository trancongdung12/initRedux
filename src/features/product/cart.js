import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const cart = createEntityAdapter();

const cartSlice = createSlice({
  name: 'cart',
  initialState: cart.getInitialState(),
  reducers: {
    addAll: cart.addMany,
    removeAll: cart.removeAll,
    addOne: cart.addOne,
    updateOne: cart.updateOne,
    removeOne: cart.removeOne,
  },
});

export const cartSelectors = cart.getSelectors(state => state.cart);
export const {reducer, actions: cartAction} = cartSlice;
export default reducer;
