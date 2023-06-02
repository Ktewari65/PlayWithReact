import React from "react"
import Form from "./Components/Form"
import { useState } from "react"
import Items from "./Components/Items"
import Cart from "./UI/Cart"
import Modal from "./UI/Modal"

const App = () =>{
  const[cart,setCart] = useState(false)
 const[comingData, setComingData] = useState([])
  const comingDataHandler = (data) =>{
        setComingData((previous) =>{
         // console.log(data)
            return [...previous,data]
        })
  }

  const modalHandler= () =>{
    setCart(false)
  }

  const openCart = () =>{
    setCart(true)
  }


  return(
    <div>
      <Form  sendingData ={comingDataHandler}/>
      <Items onSendData={comingData}/>
       <Cart onClick={openCart}/>
       {cart &&<Modal onClick={modalHandler}/>}
    </div>
  )
}

export default App