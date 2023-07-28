import { createSlice } from "@reduxjs/toolkit";

const CartCounterSlice = createSlice({
  name: "CounterSlice",
  initialState: { counter: 0, total: 0 },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      if (state.counter <= 0) state.counter = 0;
      else state.counter--;
    },
    totalprice(state, action) {
      state.total = state.counter * action.payload;
    },
  },
});

export default CartCounterSlice.reducer;
export const CartCounterActions = CartCounterSlice.actions;
