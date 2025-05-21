import classes from './OrderDisplay.module.css'
import CartClasses from '../ShoppingCart/ShoppingCart.module.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import storeApiService from '../../services/storeApiService';
import CartItem from '../../models/CartItem';
interface OrderDisplayProps {
    className?: string;
}
const OrderDisplay = ( {className} : OrderDisplayProps) : JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  if(location.state )
  {
    storeApiService.setCartDatalocal(new Array<CartItem>);
    return (
      <>
      <title>Order confirmed</title>
      <div className={`${classes.container} ${(className) ? className : ''}`}>
          <h2  className={classes.h2}>{`Thanks for your order, ${(location.state && location.state['firstName']) ? location.state['firstName'] : 'First name not found.'}`}</h2>
          <p className={classes.p}>{`Here's your order number: #${(location.state && location.state['orderNumber']) ? location.state['orderNumber'] : 'Order number not found.'}. We can't wait for you to see what's in store.`}</p>
          <p className={classes.p}>{`A confirmation email was sent to your email address: ${(location.state && location.state['email']) ? location.state['email'] : 'Email not found.'}`}</p>
          <br/>
          <p className={classes.p}>Once your package ships, we'll send you a tracking number.</p>
          <br/>
          <p className={classes.p}>{`${location.state && location.state['Deilverydate'] ? location.state['Deilverydate'] : ''}`}</p>
          <p>Have a question about your order? <Link to='/' className={CartClasses.AltText} >Send us a message</Link> and a Store team member will be in touch.</p>
      </div>
      </>
    );
  }
  return (
    <>
    <title>Failed to confirm order</title>
    <div className={`${classes.container} ${(className) ? className : ''}`}>
        <h2>Failed to order your items.</h2>
        <p className={classes.p}>We're sorry, but the Store was not able to place your order at this time</p>
        <p className={classes.p}> You were not charged</p>
        <p className={classes.p}>Please try again later.</p>
        <Link onClick={(event) => {
            event.preventDefault();
            navigate("/", {state: { username: (location.state) ? location.state['username'] : '', userId: (location.state) ? location.state['userId'] : 0 }});
          }} to='/' className={CartClasses.AltText}>Go to the home page.</Link>
    </div>
    </>
  );
}
export default OrderDisplay;