import FormInput from "../FormInput/FormInput"
import classes from '../CouponForm/CouponForm.module.css'
import ids from '../CouponForm/CouponForm.module.css'
import storeApiService from "../../services/storeApiService";
const CouponForm = () : JSX.Element => {
  return (
    <>
    <form id={ids.CouponForm} onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(event.currentTarget[0]) {
      const couponState = storeApiService.isCouponValid((event.currentTarget[0] as HTMLFormElement).value);
      couponState.then((coupon) => {
        if(coupon[0] && coupon[0]?.discountPercent) {
          console.log(coupon[0]?.discountPercent);
        }
      }) 
    }
  }}>
    <FormInput className={classes.CouponInput} type="text" name="coupon" required placeholder="Coupon code" maxLength={10} id={ids.CouponCodeInput} onInput={ 
      (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (event.type) {
        case "input": {
        event.target.value = event.target.value.toUpperCase().replace(/([^A-Z0-9:./()\-\s])/g, "");
      }
    }
  } }/>
    </form>
    <FormInput className={classes.CouponInput} form={ids.CouponForm} type="submit" name="couponButton" value="Apply" required/>
    </>
  )
}

export default CouponForm