import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/ProductsSlice';
import productReducer from '../features/products/ProductSlice';

const store = configureStore({
    reducer : {
        products: productsReducer, 
        product : productReducer,
    }
})

export default store;