import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getError } from "../../utils";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const fetchProducts = createAsyncThunk("fetch/products", async () => {
  try {
    const { data } = await axios.get("/api/products");
    return data;
  } catch (error) {
    throw new Error(getError(error));
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
export { fetchProducts };
