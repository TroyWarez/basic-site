import classes from "./NavigationBar.module.css"
import ImgButton from "../ImgButton/ImgButton"
import storefrontCartIcon from "../../assets/icons/storefrontCartIcon.svg"
import storefrontIcon from "../../assets/icons/storefrontIcon.svg"
interface NavigationBarProps {
  cartItemAmount?: number;
  className?: string;
}
export const NavigationBar = ( { cartItemAmount, className } : NavigationBarProps)  : JSX.Element => {
  return (
    <div className={classes.navbarcontainer}>
    <header className={`${classes.navbar} ${(className) ? className : ''}`}>
    <ImgButton imgPath={storefrontIcon} name={"Store"} altText={"Home"} linkPath="/"/>
    {(cartItemAmount) ?
    <ImgButton className={classes.cart} imgPath={storefrontCartIcon} altText={"Cart"} linkPath="/cart" ImgChild={<p className={classes.badge}/>}/> : <></> }
    </header>
    </div>
  )
}

export default NavigationBar