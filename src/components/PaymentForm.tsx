import React from 'react'
import classes from './PaymentForm.module.css'
const PaymentForm = () => {
  return (
    <>
    <div>
        <form className={classes.form}>
        <h3>Payment</h3>
        <p>All transactions are secure and encrypted.</p>
        </form>
    </div>
    </>
  )
}

export default PaymentForm