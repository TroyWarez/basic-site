import React from 'react'
import classes from "../CheckoutCart/CheckoutCart.module.css"
const CheckoutCart = () => {
  return (
    <div className={classes.CheckoutCart}>
        <img src="Toy Car.jpg" alt='ProductImage'/>
        <p>{'$29.99 USD'}</p>
    </div>
  )
}
export default CheckoutCart