import classes from './OrderDisplay.module.css'
import CartClasses from '../ShoppingCart/ShoppingCart.module.css'
import { useSearchParams, Link } from "react-router-dom";
interface OrderDisplayProps {
    className?: string;
}
const OrderDisplay = ( {className} : OrderDisplayProps) : JSX.Element => {
  const [queryParams, setQueryParams] = useSearchParams();
  if(queryParams.size >= 3)
  {
    return (
      <>
      <title>Order confirmed</title>
      <div className={`${classes.container} ${(className) ? className : ''}`}>
          <h2  className={classes.h2}>{`Thanks for your order, ${(queryParams.get('firstName') !== null) ? queryParams.get('firstName') : 'First name not found.'}`}</h2>
          <p className={classes.p}>{`Here's your order number: #${(queryParams.get('OrderNumber') !== null) ? queryParams.get('OrderNumber') : 'Order number not found.'}. We can't wait for you to see what's in store.`}</p>
          <p className={classes.p}>{`A confirmation email was sent to your email address: ${(queryParams.get('email') !== null) ? queryParams.get('email') : 'Email not found.'}`}</p>
          <br/>
          <p className={classes.p}>Once your package ships, we'll see you a tracking number.</p>
          <br/>
          <p className={classes.p}>{`${queryParams.get('deliveryDate')}`}</p>
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
        <Link to='/' className={CartClasses.AltText}>Go to the home page.</Link>
    </div>
    </>
  );
}
export default OrderDisplay;