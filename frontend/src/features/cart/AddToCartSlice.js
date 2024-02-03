import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addCart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
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
      const cartItems = existItem
        ? state.addCart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.addCart.cartItems, newItem];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      state.addCart = { ...state.addCart, cartItems };
    },
    deleteCart(state, action) {
      const cartItems = state.addCart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      state.addCart = { ...state.addCart, cartItems };
    },
  },
});

export const { addToCart, deleteCart } = CartAddSlice.actions;
export default CartAddSlice.reducer;
