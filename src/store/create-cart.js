import { createSlice } from "@reduxjs/toolkit";

const CreateCartSlice = createSlice({
  name: "createCartSlice",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      // console.log(action);
      const newItem = action.payload;
      state.totalQuantity++;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalprice += newItem.price;
      }
    },
    removeItemCart(state, actions) {
      state.totalQuantity--;
      const id = actions.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id != id);
      } else {
        existingItem.quantity--;
        existingItem.totalprice -= existingItem.price;
      }
    },
  },
});

export const CartActions = CreateCartSlice.actions;
export default CreateCartSlice.reducer;
