import classes from "./NavigationBar.module.css"
import ImgButton from "../ImgButton/ImgButton"
interface NavigationBarProps {
  cartItemAmount: number;
}
export const NavigationBar = ( props : NavigationBarProps)  : JSX.Element => {
  return (
    <div className={classes.navbar}>
    <ImgButton imgPath={"storefrontIcon.png"} name={"Store"} altText={"Home"} linkPath="/"/>
    <ImgButton className={classes.cart} imgPath={"storefrontCartIcon.png"} name={""} altText={"Cart"} linkPath="/cart"/>
    <p className={(props.cartItemAmount === 0) ? `${classes.cartItemAmount} ${classes.cartItemAmountHidden}` : classes.cartItemAmount}>
      {(props.cartItemAmount === 0) ? '10' : props.cartItemAmount}
      </p>
    </div>
  )
}

export default NavigationBar