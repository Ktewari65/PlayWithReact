import React, { Fragment, useContext } from "react";
import  ReactDOM  from "react-dom";
import classes from './Modal.module.css'
import AuthContext from "../Store/AuthContext";

   const Overlay = (props) =>{
     const ctx= useContext(AuthContext)
     //console.log("Model")
   // console.log(ctx.items)
  
    return (
     <div className={classes.modal}>
        <div>quantity</div>
        <span>{ctx.items.map((item)=>{
          //console.log(item)
         return  <li>  {item[0].name} -{item[0].description} - {item.quantity}</li>
        })}</span>
         <div className={classes.content}>{props.children}</div>
         <button>Order</button>
         <button onClick={props.onClick}>Close</button>
     </div>
    )
  }
  const holder = document.getElementById('modal')

  const Modal = (props) =>{
    return(
     <Fragment>
         {ReactDOM.createPortal(<Overlay onClick={props.onClick}>{props.children}</Overlay>,holder)}
    </Fragment>
    )
  }

  export default Modal
