import { Link } from "react-router-dom";
import classes from "./StoreFooter.module.css"
interface StoreFooterProps {
    legal_href: string;
    privacy_href: string;
    children?: React.ReactNode;
}
const StoreFooter = ({ legal_href, privacy_href, children} :StoreFooterProps) => {
  return (
    <footer className={classes.footer}>
    
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