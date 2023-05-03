import { useRef, useImperativeHandle } from 'react';
import React from "react";
import classes from './input.module.css'


const Input = React.forwardRef((props,ref) => {

  const input = useRef()

  const activate = ()=>{
    input.current.focus()
  }

  useImperativeHandle( ref,()=>{
return{
  focus:activate
}
  })
return(
    <div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ''
    }`}
  >
    <label htmlFor= {props.id}>{props.label}</label>
    <input
      ref={input}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
)
}
)

export default Input