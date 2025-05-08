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
      <div className={`${classes.container} ${(className) ? className : ''}`}>
          <h2  className={classes.h2}>{`Thanks for your order, ${queryParams.get('firstName')}`}</h2>
          <p className={classes.p}>{`Here's your order number: #${queryParams.get('OrderNumber')}. We can't wait for you to see what's in store.`}</p>
          <p className={classes.p}></p>
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
    <div className={`${classes.container} ${(className) ? className : ''}`}>
        <h2>Failed to order your items.</h2>
        <p className={classes.p}>We're sorry, but the store was not able to place your order at this time.</p>
        <p className={classes.p}>Please try again later.</p>
        <Link to='/'>Go to the home page.</Link>
    </div>
    </>
  );
}
export default OrderDisplay;