import { useState } from "react";
import CouponClasses from '../CouponForm/CouponForm.module.css'
import classes from '../DropdownContainer/DropdownContainer.module.css'
interface DropdownProps {
  children: JSX.Element | JSX.Element[];
  label: string;
  collapsed: boolean
}
const DropdownContainer = ({ children, label, collapsed}: DropdownProps): JSX.Element   => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  return (
    <>
    <div className={`${CouponClasses.DropdownContainer} ${classes.labelBorder}`} onClick={() => {
      (isCollapsed) ? setIsCollapsed(false) : setIsCollapsed(true);
    }}>
    <p className={`${CouponClasses.p} ${classes.labelDropdown}`}><b>{label}</b></p>
    <input type='button' value='>' className={`${(isCollapsed) ? `${CouponClasses.DropdownButtonDown} ${classes.transparentBackground}` : `${CouponClasses.DropdownButtonUp} ${classes.transparentBackground}` }`} />
    </div>
    <div hidden={isCollapsed}>
        {children}
    </div>
    </>
  )
}

export default DropdownContainer;