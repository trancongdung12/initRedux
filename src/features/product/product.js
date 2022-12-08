import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const product = createEntityAdapter();

const productSlice = createSlice({
  name: 'product',
  initialState: product.getInitialState(),
  reducers: {
    addAll: product.addMany,
    removeAll: product.removeAll,
  },
});

export const productSelectors = product.getSelectors(state => state.product);
export const {reducer, actions: productAction} = productSlice;
export default reducer;
