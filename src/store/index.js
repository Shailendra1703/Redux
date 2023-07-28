import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./carttoggle";
import CartCounterReducer from "./cartCouter";
import CartHandlerReducer from "./create-cart";

const store = configureStore({
  reducer: {
    Cart: CartReducer,
    CartCounter: CartCounterReducer,
    CartHandler: CartHandlerReducer,
  },
});

export default store;
