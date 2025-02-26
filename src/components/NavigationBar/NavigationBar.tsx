import classes from "./NavigationBar.module.css"
import ImgButton from "../ImgButton/ImgButton"
import { useState } from "react"
interface NavigationBarProps {
  cartItemAmount: string;
}
export const NavigationBar = ( props : NavigationBarProps)  : JSX.Element => {
  return (
    <div className={classes.navbar}>
    <ImgButton imgPath={"storefrontIcon.png"} name={"Store"} altText={"Home"} linkPath="/"/>
    <ImgButton className={classes.cart} imgPath={"storefrontCartIcon.png"} name={""} altText={"Cart"} linkPath="/cart"/>
    <p className={classes.cartItemAmount}>{props.cartItemAmount}</p>
    </div>
  )
}

export default NavigationBar