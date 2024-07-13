import React from 'react'
import classes from './PaymentForm.module.css'
const PaymentForm = () => {
  return (
    <>
    <div>
        <form className={classes.form}>
        <h3>Payment</h3>
        <p>All transactions are secure and encrypted.</p>
        <input type="text" name="Card number" id="cardnumber" required placeholder="Card Number" maxLength={16}/>

        <input type="text" name="Expiration date (MM / YY)" id="expirationdate" required placeholder="Expiration date (MM / YY)" maxLength={5}/>
        </form>
    </div>
    </>
  )
}

export default PaymentForm