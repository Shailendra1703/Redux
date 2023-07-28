import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: { showCart: false, notification: null },
  reducers: {
    toggleCart(state) {
      state.showCart = true;
    },
    toggleItems(state) {
      state.showCart = false;
    },
    showNotifications(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default CartSlice.reducer;
export const CartActions = CartSlice.actions;
