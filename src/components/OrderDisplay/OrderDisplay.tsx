import classes from './OrderDisplay.module.css'
import { useSearchParams, Link } from "react-router-dom";
interface OrderDisplayProps {
    className?: string;
}
const OrderDisplay = ( {className} : OrderDisplayProps) : JSX.Element => {
  const [queryParams, setQueryParams] = useSearchParams();
  if(queryParams.size)
  {
    const firstName = queryParams.get('firstName');
    const orderNumber = queryParams.get('OrderNumber');
    const email = queryParams.get('email');
    return (
      <>
      <div className={`${classes.container} ${(className) ? className : ''}`}>
          <h2>Order Confirmed</h2>
          <b>{`Thank you for the order ${firstName}`}</b>
          <b>{`An email confirmation has been sent to: ${email} .`}</b>
          <b>{`Order Number: #${orderNumber}`}</b>
      </div>
      </>
    );
  }
  return (
    <>
    <div className={`${classes.container} ${(className) ? className : ''}`}>
        <h2>Failed to order your items.</h2>
        <b>We're sorry, but the store was not able to place your order at this time.</b>
        <b>Please try again later.</b>
        <Link to='/'>Go to the home page.</Link>
    </div>
    </>
  );
}
export default OrderDisplay;