import { Link } from "react-router-dom";
import classes from "./ShoppingCart.module.css"
import { useState } from "react";
import storeApiService from "../../services/storeApiService";
interface ShoppingCartProps {
  className?: string;
  SignInPagePath: string;
  ProductPagePath: string;
}
const ShoppingCart = ({ className, SignInPagePath, ProductPagePath } : ShoppingCartProps) => {
  const cartData = storeApiService.getCartDatalocal();
  if(cartData?.length === 0) {
    return (
      <div className={(className) ? `${classes.emptycart} ${className}` : classes.emptycart}>
        <span className={`${classes.spanLarge} ${classes.span}`}>Your shopping cart is empty</span>
        <span className={classes.span}>Have any wishlist items? Sign in to view them</span>
        <Link className={classes.button} to={SignInPagePath}>Sign in</Link>
        <Link className={`${classes.button} ${classes.buttonColored}`} to={ProductPagePath}>Continue shopping</Link>
      </div>
    )
  }
  return (
    <div className={(className) ? `${classes.cart} ${className}` : classes.cart}>
      
    </div>
  )
}

export default ShoppingCart;