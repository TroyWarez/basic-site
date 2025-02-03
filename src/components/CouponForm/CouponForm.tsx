import FormInput from "../FormInput/FormInput"
import classes from '../CouponForm/CouponForm.module.css'
import ids from '../CouponForm/CouponForm.module.css'

const OnClickHandler = (event: React.PointerEvent<HTMLInputElement>) => {
  switch (event.type) {
    case "click":
      {
        const CouponCodeInputElement = document.getElementById(ids.CouponCodeInput) as HTMLInputElement;
        if (CouponCodeInputElement) {
          console.log(CouponCodeInputElement.value);
        }
      }
  }
}
const OnInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  switch (event.type) {
    case "input": {
      console.log(event.target.value);
    }
  }
}
const CouponForm = () : JSX.Element => {
  return (
    <>
    <form id={ids.CouponForm}>
    <FormInput className={classes.CouponInput} type="text" name="coupon" required placeholder="Coupon code" maxLength={95} id={ids.CouponCodeInput} onInput={OnInputHandler}/>
    </form>
    <FormInput className={classes.CouponInput} form={ids.CouponForm} type="button" name="couponButton" value="Apply" required onClick={OnClickHandler}/>
    </>
  )
}

export default CouponForm