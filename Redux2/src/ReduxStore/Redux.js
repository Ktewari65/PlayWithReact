//import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {isCart:false}
const cartStore = createSlice({
    name:'CART',
    initialState,
    reducers :{
        setCart(state){
          state.isCart = true
        },
        closeCart(state){
            state.isCart= false
        }
    }

})

const store = configureStore({
  reducer : cartStore.reducer
})

export default store

export const cartState = cartStore.actions