import React from 'react'
import classes from "../CheckoutCart/CheckoutCart.module.css"
import CartItem from "../../models/CartItem"
interface CartProps {
  cartItems: CartItem[];
  className?: string;
}
const CheckoutCart = ({ cartItems, className}: CartProps) => {
  return (
    <>
    <div>
    {cartItems.map((cartItem) => (
      //if(cartItem.sku ==)
          <div className={`${classes.CheckoutCart} ${className}`}>
              <p className={classes.quantityNumber}>{cartItem.quantityNumber}</p>
              <img src={cartItem.productImagePath} alt='ProductImage'/>
              <p className={classes.p}>{cartItem.displayItemName}</p>
              <p className={classes.p}>{`Subtotal ${cartItem.displayCurrencyValue}`}</p>
          </div>
    ))}
    </div>
    </>

  )
}
export default CheckoutCart