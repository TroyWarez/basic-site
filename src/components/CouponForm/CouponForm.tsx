import FormInput from "../FormInput/FormInput"
import classes from '../CouponForm/CouponForm.module.css'
import ids from '../CouponForm/CouponForm.module.css'
import { useState } from "react"
const CouponForm = () : JSX.Element => {
  const [couponText, setCouponText] = useState("");
  return (
    <>
    <form id={ids.CouponForm}>
    <FormInput className={classes.CouponInput} type="text" name="coupon" required placeholder="Coupon code" maxLength={10} id={ids.CouponCodeInput} onInput={ 
      (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (event.type) {
        case "input": {
        event.target.value = event.target.value.toUpperCase();
        setCouponText(event.target.value);
      }
    }
  } }/>
    </form>
    <FormInput className={classes.CouponInput} form={ids.CouponForm} type="button" name="couponButton" value="Apply" required onClick={(event: React.PointerEvent<HTMLInputElement>) => {
      switch (event.type) {
        case "click":
          {
            if (couponText != "") {
              console.log(couponText);
            }
          }
      }
}}/>
    </>
  )
}

export default CouponForm