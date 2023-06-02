import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) =>{
     const[cart,setCart] = useState([])
     console.log(cart)
    const addItemHandler = (item) =>{
      setCart((previous)=>{
        return [...previous,item]
      })
    }
     const deleteItemHandler = () =>{
        
     }

    
    const object= {
     items:cart,
     addItem:addItemHandler,
     deleteItem:deleteItemHandler 
    }

   
    return(
        <AuthContext.Provider  value={object}>{props.children}</AuthContext.Provider>
    )
}

export default AuthProvider