import classes from "./CheckoutFooter.module.css"
import { Link } from "react-router-dom";

const CheckoutFooter = ()  : JSX.Element => {
  return (
    <div className={classes.CheckoutFooter}>
      <Link to="/refundpolicy">Refund policy</Link>
      <Link to="/privacypolicy">Privacy policy</Link>
      <Link to="/termsofservice">Terms of Service</Link>
    </div>
  )
}

export default CheckoutFooter