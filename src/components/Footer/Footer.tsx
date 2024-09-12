import classes from "./Footer.module.css"
import { Link } from "react-router-dom";

const Footer = ()  : JSX.Element => {
  return (
    <>
    <Link to="/refundpolicy" className={classes.Footer}>Refund policy</Link>
    <Link to="/privacypolicy" className={classes.Footer}>Privacy policy</Link>
    <Link to="/termsofservice" className={classes.Footer}>Terms of Service</Link>
    </>
  )
}

export default Footer