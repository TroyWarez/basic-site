import { Link } from "react-router-dom";
import classes from "./StoreFooter.module.css"
interface StoreFooterProps {
    className?: string;
    legal_href: string;
    privacy_href: string;
    children?: React.ReactNode;
}
const StoreFooter = ({ className, legal_href, privacy_href, children} : StoreFooterProps) : JSX.Element  => {
  return (
    <footer className={(className) ? `${classes.footer} ${className}` : classes.footer}>
      <div className={classes.footercontainer}>
        <Link className={`${classes.footer} ${classes.legal}`} to={legal_href}>Legal</Link>
        <Link className={`${classes.footer} ${classes.privacy}`} to={privacy_href}>Privacy</Link>
      </div>
    Copyright © {new Date().getFullYear()}, Company Inc. All rights reserved.
    {children}
    </footer>
  )
}

export default StoreFooter;