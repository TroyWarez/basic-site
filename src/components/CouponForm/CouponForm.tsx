import FormInput from "../FormInput/FormInput"
import classes from '../CouponForm/CouponForm.module.css'
import ids from '../CouponForm/CouponForm.module.css'

const OnClickHandler = (event: React.PointerEvent<HTMLInputElement>) => {
  switch (event.type) {
    case "click":
      {
        console.log("");
      }
  }
}
const CouponForm = () : JSX.Element => {
  return (
    <>
    <form id={ids.CouponForm}>
    <FormInput className={classes.CouponInput} type="text" name="coupon" required placeholder="Coupon code" maxLength={95} id={ids.CouponCodeInput}/>
    </form>
    <FormInput className={classes.CouponInput} form={ids.CouponForm} type="button" name="couponButton" value="Apply" required onClick={OnClickHandler}/>
    </>
  )
}

export default CouponForm