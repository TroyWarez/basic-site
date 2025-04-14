import { Link } from "react-router-dom";
import classes from "./ShoppingCart.module.css"
import { useState } from "react";
const ShoppingCart = () => {
  return (
    <div className={classes.cartcontainer}>
      <span className={`${classes.spanLarge} ${classes.span}`}>Your shopping cart is empty</span>
      <span className={classes.span}>Have any wishlist items? Sign in to view them</span>
      <Link className={classes.button } to="/customer/account/login/">Sign in</Link>
      <Link className={`${classes.button} ${classes.buttonColored}`} to="/en/products/">Continue shopping</Link>
    </div>
  )
}

export default ShoppingCart