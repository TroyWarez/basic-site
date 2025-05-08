import classes from './OrderDisplay.module.css'
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
          <h2  className={classes.h2}>Your order is confirmed.</h2>
          <p className={classes.p}>{`Thank you for the order ${queryParams.get('firstName')}`}</p>
          <p className={classes.p}>{`An email confirmation has been sent to: ${queryParams.get('email')} .`}</p>
          <p className={classes.p}>{`Order Number: #${queryParams.get('OrderNumber')}`}</p>
          <p className={classes.p}>{`${queryParams.get('deliveryDate')}`}</p>
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