
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector(state => state.items)

 
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      
      <ul>
  {Object.entries(cartItems).map(([key, value]) => (
    <CartItem
      key={key}
      item={{
        id: key,
        items: value.items,
        quantity: value.quantity,
        // Add other properties if needed
      }}
    />
  ))}
</ul>

    </Card>
  );
};

export default Cart;
