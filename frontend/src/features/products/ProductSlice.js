import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  product: [],
  error: "",
};

const fetchProduct = createAsyncThunk("fetch/product", async (slug) => {
  try {
    const { data } = await axios.get(`/api/products/slug/${slug}`);
    return data;
  } catch (error) {
    console.log("error:", error);
    throw new Error(error.response.data.message);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });
  },
});

export { fetchProduct };
export default productSlice.reducer;
