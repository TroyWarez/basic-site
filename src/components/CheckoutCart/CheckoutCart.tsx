import React from 'react'
import classes from "../CheckoutCart/CheckoutCart.module.css"
interface CartProps {
  className?: string;
}
const CheckoutCart = () => {
  return (
    <>
    <div className={classes.CheckoutCart}>
        <img src="Toy Car.jpg" alt='ProductImage'/>
    </div>
            <p className={classes.p}>{'$29.99 USD'}</p>
            </>
  )
}
export default CheckoutCart