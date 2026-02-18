import { createSlice } from "@reduxjs/toolkit";
import { OrderData, Product, solanaCourse } from "../../Type/Type";

export interface productState {
  solanaCourse: solanaCourse;
  isFilter: boolean;
  arrWithFilter: Product[];
  productOrders: OrderData[];
}

const initialState: productState = {
  solanaCourse: { solana: 1, usd: 130 },
  isFilter: false,
  arrWithFilter: [],
  productOrders: [],
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    statusSlice: (state, action) => {
      if (action.payload === true) {
        state.isFilter = true;
      } else {
        state.isFilter = false;
      }
    },
    fillteredArrSlice: (state, action) => {
      const filteredArr: Product[] = action.payload;

      state.arrWithFilter.splice(0, state.arrWithFilter.length);

      filteredArr.forEach((product) => {
        state.arrWithFilter.push(product);
      });
    },

    productOrderSlice: (state, action) => {
      state.productOrders.push(action.payload);
    },
  },
});

export const { statusSlice, fillteredArrSlice, productOrderSlice } =
  productsSlice.actions;

export default productsSlice.reducer;
