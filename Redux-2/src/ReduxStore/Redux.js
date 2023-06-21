//import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";





const initialState = {isCart:false, items : [], totalQuantity:0, isNotification : null}
const cartStore = createSlice({
    name:'CART',
    initialState,
    reducers :{
         replace(state,action){
          state.totalQuantity = action.payload.totalQuantity
          state.items = action.payload.items
         },
        setCart(state){
          state.isCart = true
        },
        closeCart(state){
            state.isCart= false
        },
        addItemToCart(state,action){
          const newItems = action.payload
          const existingItem = state.items.find((item) =>item.id===newItems.id)
          state.totalQuantity++
          if(!existingItem){
            state.items.push({
              id : newItems.id,
              price: newItems.price,
              quantity:1,
              totalPrice: newItems.price,
              name:newItems.title
            })
          }
          else {
            existingItem.quantity++
            existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
          }

        },
        removeItemFromCart(state,action){
             const id = action.payload
             const existingItem = state.items.find((item) => item.id ===id)
             state.totalQuantity--
             
             if(existingItem.quantity===1){
                 state.items = state.items.filter(item => item.id!==id)
             }
             else{
              existingItem.quantity--
              existingItem.totalPrice = existingItem.totalPrice - existingItem.price
             }
        },
        itemStatus(state,action){
           state.isNotification = {
                  status : action.payload.status,
                  title  : action.payload.title,
                  message:  action.payload.message
           }
        }
    }

})



export const fetchData = () =>{
 return  async(dispatch)=>{
   const fetchData = async()=>{
    const response = await fetch("https://expensetreacker-default-rtdb.firebaseio.com/cart.json")
    if(!response.ok){
     throw new Error ("Not able to fetch")
    }

    const data = await response.json()
    console.log(data)
    return data
   }
   try {
    const cartData = await fetchData()
    dispatch(cartState.replace(cartData))
   }
   catch{

   }
 }
  
}

const store = configureStore({
  reducer : cartStore.reducer
})

export default store

export const cartState = cartStore.actions