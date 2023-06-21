import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import Notification from './components/UI/Notification';
import { useDispatch } from 'react-redux';
import { cartState } from './ReduxStore/Redux';
import { fetchData } from './ReduxStore/Redux';


 
//let initialStatus = true 
function App(props) {
  const cart = useSelector(state=>state.isCart)
  const items = useSelector(state=>state.items)
   const quantity = useSelector(state=>state.totalQuantity)
   const dispatch = useDispatch()
   const status = useSelector (state=>state.isNotification)
   //console.log(status)


   useEffect(()=>{
    console.log("get request")
       dispatch(fetchData())
   },[dispatch])

  useEffect(() =>{
    dispatch(cartState.itemStatus({
      statue : "Sending",
      title: "Sending......",
      message :"Sent"
    }))
     fetch("https://expensetreacker-default-rtdb.firebaseio.com/cart.json",{
      method: "POST",
      body: JSON.stringify({items,quantity})
     }).then((response)=>{
      dispatch(cartState.itemStatus({
        statue : "success",
        title: "Successfull",
        message :"Sent"
      }))
        response.json().then((data)=>{
          
        }).catch((error)=>{
          dispatch(cartState.itemStatus({
            statue : "error",
            title: "Error",
            message :"Something went wrong"
          }))
        })
     })
  },[items,quantity,dispatch])


 
  return (
    <Fragment>
    {status &&   <Notification title ={status.title}  message = {status.message} error ={status.error}/>}
    <Layout>
     {cart  && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
