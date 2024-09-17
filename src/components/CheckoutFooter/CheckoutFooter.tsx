import classes from "./CheckoutFooter.module.css"
import { Link } from "react-router-dom";

const Footer = ()  : JSX.Element => {
  return (
    <>
    <Link to="/refundpolicy" className={classes.CheckoutFooter}>Refund policy</Link>
    <Link to="/privacypolicy" className={classes.CheckoutFooter}>Privacy policy</Link>
    <Link to="/termsofservice" className={classes.CheckoutFooter}>Terms of Service</Link>
    </>
  )
}

export default Footer