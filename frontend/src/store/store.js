import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/ProductsSlice';
import productReducer from '../features/products/ProductSlice';
import addtoCartReducer from '../features/cart/AddToCartSlice';

const store = configureStore({
    reducer : {
        products: productsReducer, 
        product : productReducer,
        cart: addtoCartReducer,
    }
})

export default store;