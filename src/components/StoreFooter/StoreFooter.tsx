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
    <a className={`${classes.footer} ${classes.legal}`} href={legal_href}>Legal</a>
    <a className={`${classes.footer} ${classes.privacy}`} href={privacy_href}>  Privacy</a>
    </div>
    Copyright © {new Date().getFullYear()}, Company Inc. All rights reserved.
    {children}
    </footer>
  )
}

export default StoreFooter;