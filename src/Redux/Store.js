import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from '../Redux/ProductSlice'

export const store=configureStore({
    reducer:{cartItems:ProductSlice}
})