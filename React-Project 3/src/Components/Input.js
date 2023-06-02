import React from "react";
import AuthContext from "../Store/AuthContext";
import { useContext } from "react";

const Input = (props) =>{
  const ctx = useContext(AuthContext)
 // console.log(props.data)
 const addItem = (event) =>{
  console.log(props)
  console.log(props.name)
  event.preventDefault()
  const quantity = document.getElementById('text').value
  ctx.addItem({...props.data,quantity:quantity})
}

 return (   
 <div>
   <input 
   type="text"
   id="text"
   min="1"
   max="5">
   </input>
   <button onClick={addItem}>+ Add</button>
   </div>
 )
}
export default Input