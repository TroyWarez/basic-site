import { Link } from "react-router-dom";
import classes from "./StoreFooter.module.css"
import { useNavigate, useLocation } from "react-router-dom";
interface StoreFooterProps {
    className?: string;
    legal_href: string;
    privacy_href: string;
    children?: React.ReactNode;
}
const StoreFooter = ({ className, legal_href, privacy_href, children} : StoreFooterProps) : JSX.Element  => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <footer className={(className) ? `${classes.footer} ${className}` : classes.footer}>
      <div className={classes.footercontainer}>
        <Link onClick={(event) => {
            event.preventDefault();
            navigate(legal_href, {state: { username: (location.state) ? location.state['username'] : '', userId: (location.state) ? location.state['userId'] : 0 }});
          }}className={`${classes.footer} ${classes.legal}`} to={legal_href}>Legal</Link>
        <Link onClick={(event) => {
            event.preventDefault();
            navigate(privacy_href, {state: { username: (location.state) ? location.state['username'] : '', userId: (location.state) ? location.state['userId'] : 0 }});
          }}className={`${classes.footer} ${classes.privacy}`} to={privacy_href}>Privacy</Link>
      </div>
    Copyright © {new Date().getFullYear()}, Company Inc. All rights reserved.
    {children}
    </footer>
  )
}

export default StoreFooter;