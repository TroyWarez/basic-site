import FormInput from "../FormInput/FormInput"
import classes from '../CouponForm/CouponForm.module.css'
import ids from '../CouponForm/CouponForm.module.css'
import { useState } from "react"
const CouponForm = () : JSX.Element => {
  const [couponText, setCouponText] = useState("");
  return (
    <>
    <form id={ids.CouponForm} onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
}}>
    <FormInput className={classes.CouponInput} type="text" name="coupon" required placeholder="Coupon code" maxLength={10} id={ids.CouponCodeInput} 
    onKeyUp={ (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case "Enter":
          {
            if (couponText)
            {
              console.log(couponText);
            }
          }
      }
    }
    } onInput={ 
      (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (event.type) {
        case "input": {
        event.target.value = event.target.value.toUpperCase().replace(/([^A-Z0-9:./()\-\s])/g, "");
        setCouponText(event.target.value);
      }
    }
  } }/>
    </form>
    <FormInput className={classes.CouponInput} form={ids.CouponForm} type="submit" name="couponButton" value="Apply" required
    onClick={(event: React.PointerEvent<HTMLInputElement>) => {
      switch (event.type) {
        case "click":
          {
            if (couponText) {
              console.log(couponText);
            }
          }
      }
}}/>
    </>
  )
}

export default CouponForm