import classes from './CartButton.module.css';
import {  useDispatch } from 'react-redux';
import { cartState } from '../../ReduxStore/Redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

const cart = useSelector(state=>state.isCart)
console.log(cart)
const dispatch = useDispatch()

const cartHandler = () =>{
      if (cart){
        dispatch(cartState.closeCart())
      }
      else {
   dispatch(cartState.setCart())
      }
}

  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
