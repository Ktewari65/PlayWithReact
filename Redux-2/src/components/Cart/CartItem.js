import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartState } from '../../ReduxStore/Redux';
import { useSelector } from 'react-redux';

const CartItem = (props) => {
 
  const {  title, quantity, total, price, id} = props
 
  console.log(props.item)
 const quant = useSelector(state =>state.totalQuantity)
 const dispatch = useDispatch()
 
  

  const addToCartHandler = () =>{
      dispatch(cartState.addItemToCart({
        id,
        total,
        quantity
      }))
  }

  const removeHandler = () =>{
    dispatch(cartState.removeItemFromCart(id))
  }
 
  return (
    <li className={classes.item} key ={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {total}
          <span className={classes.itemprice}>{price}</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quant}</span>
        </div>
        <div className={classes.actions}>
        <button onClick={removeHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
    // <li className={classes.item}>
    //   <header>
    //     <h3>{title}</h3>
    //     <div className={classes.price}>
    //     ${ totalPrice.toFixed(2)}{' '}
    //       <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
    //     </div>
    //   </header>
    //   <div className={classes.details}>
    //    <div className={classes.quantity}>
    //       x <span>{quant}</span>
    //     </div>
    //     <div className={classes.actions}>
    //       <button onClick={removeHandler}>-</button>
    //       <button onClick={addToCartHandler}>+</button>
    //     </div>
    //   </div>
    // </li>
  );
};

export default CartItem;
