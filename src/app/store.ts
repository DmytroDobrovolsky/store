import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slicers/products";

export const store = configureStore({
  reducer: { products: counterReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
