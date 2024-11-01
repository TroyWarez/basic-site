import classes from "./NavigationBar.module.css"
import ImgButton from "../ImgButton/ImgButton"
export const NavigationBar = ()  : JSX.Element => {
  return (
    <div className={classes.navbar}>
    <ImgButton imgPath={"storefrontIcon.png"} name={"Store"} altText={"Home"} linkPath="/"/>
    <ImgButton className={classes.cart} imgPath={"storefrontCartIcon.png"} name={""} altText={"Cart"} linkPath="/cart"/>
    </div>
  )
}
export default NavigationBar