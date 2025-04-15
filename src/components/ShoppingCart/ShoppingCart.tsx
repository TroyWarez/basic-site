import { Link } from "react-router-dom";
import classes from "./ShoppingCart.module.css"
import { useState } from "react";
interface ShoppingCartProps {
  className?: string;
  SignInPagePath: string;
  ProductPagePath: string;
}
const ShoppingCart = ({ className, SignInPagePath, ProductPagePath } : ShoppingCartProps) => {
  return (
    <div className={`classes.cartcontainer ${className}`}>
      <span className={`${classes.spanLarge} ${classes.span}`}>Your shopping cart is empty</span>
      <span className={classes.span}>Have any wishlist items? Sign in to view them</span>
      <Link className={classes.button} to={SignInPagePath}>Sign in</Link>
      <Link className={`${classes.button} ${classes.buttonColored}`} to={ProductPagePath}>Continue shopping</Link>
    </div>
  )
}

export default ShoppingCart;