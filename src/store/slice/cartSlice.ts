import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";
// import type { RootState } from "./store/store"
import type { RootState, AppDispatch } from "../store";

// Define a type for the slice state
export interface CartState {
  // value: number;
  items: Array<any>;
  totalAmount: number;
  totalQuantity: number;
}

// Define the initial state using that type
const initialState: CartState = {
  // value: 1,
  items: [],
  totalAmount: 0,
  totalQuantity: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<number>) => {
      state.totalQuantity += 1;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      if (state.totalQuantity > 1) state.totalQuantity -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // clearCart: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const cartActions = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
export const selectCount = (state: RootState) => state.cart.totalQuantity;

export default cartSlice.reducer;
