import React from 'react'
import Input from "./Input/Input"
import classes from './PaymentForm.module.css'
const PaymentForm = () => {
  return (
    <>
    <div>
        <form className={classes.form}>
        <h3 className={classes.heading}>Payment</h3>
        <p className={classes.p} >All transactions are secure and encrypted.</p>
        <Input type="text" name="Card number" id="cardnumber" required={true} placeholder="Card Number" maxLength={16}/>

        <Input type="text" name="Expiration date (MM / YY)" id="expirationdate" required placeholder="Expiration date (MM / YY)" maxLength={5}/>
        <Input type="text" name="Security Code" id="securitycode" required={true} placeholder="Security Code" maxLength={4}/>
        </form>
    </div>
    </>
  )
}

export default PaymentForm