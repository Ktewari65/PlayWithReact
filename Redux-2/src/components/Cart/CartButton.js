import classes from './CartButton.module.css';
import {  useDispatch } from 'react-redux';
import { cartState } from '../../ReduxStore/Redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

const cart = useSelector(state=>state.isCart)
 const quant = useSelector(state =>state.totalQuantity)
const dispatch = useDispatch()

const cartHandler = () =>{
      if (cart){
   dispatch(cartState.closeCart())
      }
      else {
   dispatch(cartState.setCart())
      }

//       fetch("https://expensetreacker-default-rtdb.firebaseio.com/cart.json",{
//         method : "GET"
//       }).then((response)=>{
//         // response.json().then((data) =>{console.log(data)})
//       })
 }

  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quant}</span>
    </button>
  );
};

export default CartButton;
