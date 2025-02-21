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
          TextInput.style.border = '2px solid rgb(11, 255, 105)';
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).hidden = false;
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).textContent = 'Applied discount.';
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).style.color = 'rgb(11, 255, 105)';
        }
        else
        {
          TextInput.style.border = '2px solid rgb(199, 1, 1)';
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).hidden = false;
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).textContent = 'The coupon is not valid.';
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).style.color = 'rgb(199, 1, 1)';
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
        if((document.getElementById(ids.CouponInputError) as HTMLParagraphElement).hidden === false)
        {
        (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).hidden = true;
        (event.target as HTMLInputElement).style.border = '2px solid var(--main-bg-accentColor)';
        }
      }
    }
  } }/>
      <FormInput className={classes.CouponInput} form={ids.CouponForm} type="submit" name="couponButton" value="Apply" required/>
      <p hidden={true} id={ids.CouponInputError}>The coupon is not valid.</p>
    </form>
    </>
  )
}

export default CouponForm