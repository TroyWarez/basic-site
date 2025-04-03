import classes from "./NavigationBar.module.css"
import ImgButton from "../ImgButton/ImgButton"
import storefrontCartIcon from "../../assets/icons/storefrontCartIcon.svg"
import storefrontIcon from "../../assets/icons/storefrontIcon.svg"
interface NavigationBarProps {
  cartItemAmount: number;
}
export const NavigationBar = ( props : NavigationBarProps)  : JSX.Element => {
  return (
    <div className={classes.navbar}>
    <ImgButton imgPath={storefrontIcon} name={"Store"} altText={"Home"} linkPath="/"/>
    <ImgButton className={classes.cart} imgPath={storefrontCartIcon} name={""} altText={"Cart"} linkPath="/cart"/>
    <p className={(props.cartItemAmount === 0) ? `${classes.cartItemAmount} ${classes.cartItemAmountHidden}` : classes.cartItemAmount}>
      {(props.cartItemAmount === 0) ? '10' : props.cartItemAmount}
      </p>
    </div>
  )
}

export default NavigationBar