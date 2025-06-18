import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage if available
const storedCart = localStorage.getItem('cart');
const initialState = {
  cart: storedCart ? JSON.parse(storedCart) : [],
};

const sliceProducts = createSlice({
  name: 'sliceProducts',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.cart.push({ ...action.payload });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(item => item.id !== payload.id);
      localStorage.setItem('cart', JSON.stringify(state.cart)); 
    },

    increaseQty: (state, { payload }) => {
      const item = state.cart.find(item => item.id === payload.id);
      if (item) item.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(state.cart)); 
    },

    decreaseQty: (state, { payload }) => {
      const item = state.cart.find(item => item.id === payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter(i => i.id !== payload.id);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart)); 
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = sliceProducts.actions;
export default sliceProducts.reducer;
