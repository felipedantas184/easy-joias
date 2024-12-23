import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'order',
  initialState: typeof window !== "undefined" && localStorage.getItem("easy-joias-order") ? {lastOrder: JSON.parse(localStorage.getItem("easy-joias-order"))} : {lastOrder: null},
  reducers: {
    addOrder: (state, action) => {
      state.lastOrder = action.payload;
    }
  },
});

export const orderReducer = orderSlice.reducer;

export const {
  addOrder,
} = orderSlice.actions;