import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addCart: {
    cartItems: [],
  },
};

const CartAddSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existItem = state.addCart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItem = existItem
        ? state.addCart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.addCart.cartItems, newItem];
      state.addCart = { ...state.addCart, cartItems: cartItem };
    },
  },
});

export const { addToCart } = CartAddSlice.actions;
export default CartAddSlice.reducer;
