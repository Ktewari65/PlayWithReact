import React from "react";
import classes from './Item.module.css'
import Input from "./Input";
//import AuthContext from "../Store/AuthContext";
const Items = (props) =>{
  // const ctx = useContext(AuthContext)
   
   
    
    
    return(
        <div>
   <ul>
     {props.onSendData.map((item, index) =>{
        //console.log(item)
     return  <li  key={index} className={classes.list}> {item.name} -  {item.description} - {item.price} -{item.id}
     <Input data={props.onSendData}/>
       </li>
     })} 
     
   </ul>
 </div>
    )

}

export default Items