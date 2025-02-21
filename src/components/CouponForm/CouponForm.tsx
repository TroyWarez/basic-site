import FormInput from "../FormInput/FormInput"
import classes from '../CouponForm/CouponForm.module.css'
import ids from '../CouponForm/CouponForm.module.css'
import storeApiService from "../../services/storeApiService";
interface CouponFormProps {
  applyCouponDiscount: (discountPercentage: number) => void;
}
const CouponForm = (Props: CouponFormProps) : JSX.Element => {
  return (
    <>
    <form id={ids.CouponForm} onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if( event.currentTarget[1] && 
      (event.currentTarget[1] as HTMLFormElement).type === 'submit' &&
      (event.currentTarget[1] as HTMLFormElement).id !== ids.CouponInputButtonLoading )
    {
      (event.currentTarget[1] as HTMLFormElement).id = ids.CouponInputButtonLoading;
      (event.currentTarget[1] as HTMLFormElement).disabled = true;
    }
    if(event.currentTarget[0]) {
      const couponState = storeApiService.getDiscountPercentage((event.currentTarget[0] as HTMLFormElement).value);
      const TextInput = (event.currentTarget[0]) as HTMLInputElement;
      const submitButton = (event.currentTarget[1]) as HTMLInputElement;
      couponState.then((discountPercentage) => {
        if(discountPercentage > 0) {
          Props.applyCouponDiscount(discountPercentage);
        }
        else
        {
          TextInput.style.border = 'solid rgb(199, 1, 1)';
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).hidden = false;
        }
      if (submitButton?.id === ids.CouponInputButtonLoading )
        {
        setTimeout(() => {
          submitButton.id = '';
          submitButton.disabled = false;
        }, 500);
        }
    }
    ) 
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
      <FormInput className={classes.CouponInput} form={ids.CouponForm} type="submit" name="couponButton" value="Apply" required/>
      <p hidden={true}  color="red" id={ids.CouponInputError}><span>The coupon is not valid.</span></p>
    </form>
    </>
  )
}

export default CouponForm