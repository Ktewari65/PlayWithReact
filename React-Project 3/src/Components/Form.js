import React from "react";
import classes from './Form.module.css'
import { useState } from "react";

const Form = (props)  =>{
const[name,setName]= useState('');
const[description,setDescription]= useState('');
const[price,setPrice]= useState('');


const nameHandler = (event) =>{
    setName(event.target.value);
}

const descriptionHandler = (event) =>{
    setDescription(event.target.value)
}

const priceHandler = (event) =>{
    setPrice(event.target.value)
}

const formHandler = (event) =>{
    event.preventDefault()

    const object= {
        name:name,
        description:description,
        price:price,
        id:Math.random()

    }

      props.sendingData(object)
}

    return (
        <div>
            <form onSubmit={formHandler} className={classes.box}>
             <label>Medicine Name</label>
             <input type="text"  onChange={nameHandler}/>
             <label>Description</label>
             <input type="text" onChange={descriptionHandler}/>
             <label>Price</label>
             <input type="number" onChange={priceHandler}/>
             <button>Add</button>
            </form>
        </div>
    )
}

export default Form