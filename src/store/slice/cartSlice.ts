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
    addtoCart: (
      state,
      action: PayloadAction<{
        productID: any;
        totalQuantity: number;
        productPrice: number;
      }>
    ) => {
      const newItem = action.payload.productID;
      // validating if item already exits in cart
      const existingItem = state.items.find((item) => item.id === newItem.id);

      // quantity/ price
      state.totalQuantity = state.totalQuantity + action.payload.totalQuantity;
      state.totalAmount =
        action.payload.totalQuantity * action.payload.productPrice;

      if (existingItem) {
        const totalPrice =
          existingItem.totalPrice +
          existingItem.price * action.payload.totalQuantity;
        existingItem.quantity += action.payload.totalQuantity;
        existingItem.totalPrice = totalPrice;
      } else {
        const totalPrice = newItem.price * action.payload.totalQuantity;
        state.items.push({
          ...newItem,
          quantity: action.payload.totalQuantity,
          totalPrice,
        });
      }
    },

    // removeFromCart: (state, action: PayloadAction<number>) => {
    //   if (state.totalQuantity > 1) state.totalQuantity -= 1;
    // },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find(
        (item: { id: string }) => item.id === productId
      );

      state.totalQuantity--;

      state.totalAmount = state.totalAmount - existingItem?.price!;

      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== productId);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem?.price!;
      }
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

// // Other code such as selectors can use the imported `RootState` type
// // export const selectCount = (state: RootState) => state.counter.value;
// export const selectCount = (state: RootState) => state.cart.totalQuantity;

export default cartSlice.reducer;
