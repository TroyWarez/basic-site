import classes from "./NavigationBar.module.css"
import ImgButton from "../ImgButton/ImgButton"
import storefrontCartIcon from "../../assets/icons/storefrontCartIcon.svg"
import storefrontIcon from "../../assets/icons/storefrontIcon.svg"
interface NavigationBarProps {
  cartItemAmount: number;
}
export const NavigationBar = ( { cartItemAmount } : NavigationBarProps)  : JSX.Element => {
  return (
    <div className={classes.navbar}>
    <ImgButton imgPath={storefrontIcon} name={"Store"} altText={"Home"} linkPath="/"/>
    {(cartItemAmount) ?
    <ImgButton className={classes.cart} imgPath={storefrontCartIcon} altText={"Cart"} linkPath="/cart" ImgChild={<p className={classes.badge}/>}/> : <></> }
    </div>
  )
}

export default NavigationBar