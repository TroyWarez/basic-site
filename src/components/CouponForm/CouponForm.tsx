import FormInput from "../FormInput/FormInput"
import classes from '../CouponForm/CouponForm.module.css'
import ids from '../CouponForm/CouponForm.module.css'
import storeApiService from "../../services/storeApiService";
import { useState } from "react";
interface CouponFormProps {
  applyCouponDiscount: (discountPercentage: number) => void;
}
const CouponForm = (Props: CouponFormProps) : JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <div className={classes.CouponContainer}>
    <div className={classes.DropdownContainer}>
    <p className={classes.p}><b>Enter Promo Code</b> (Optional)</p>
    <input type='button' value='>' className={`${(isCollapsed) ? classes.DropdownButtonDown : classes.DropdownButtonUp }`} onClick={() => {
      (isCollapsed) ? setIsCollapsed(false) : setIsCollapsed(true);
    }}
    />
    </div>

    <div className={`${(isCollapsed) ? classes.FormContainerHidden : classes.FormContainer }`}>
    <form id={ids.CouponForm} onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const CouponCodeInput = (event.currentTarget[0] as HTMLFormElement);
    const CouponCodeSubmitButton = (event.currentTarget[1] as HTMLFormElement);
    let discountValid = false;

    if ((CouponCodeInput.value.length >= 5))
    {
    if( CouponCodeSubmitButton && 
      CouponCodeSubmitButton?.type === 'submit' &&
      CouponCodeSubmitButton?.id !== ids.CouponInputButtonLoading )
    {
      CouponCodeSubmitButton.id = ids.CouponInputButtonLoading;
      CouponCodeSubmitButton.disabled = true;
    }
    if(CouponCodeInput.value) {
      const couponState = storeApiService.getDiscountPercentage(CouponCodeInput.value);
      couponState.then((discountPercentage) => {
        if(discountPercentage > 0) {
          Props.applyCouponDiscount(discountPercentage);
          CouponCodeInput.style.border = '2px solid rgb(10, 160, 67)';
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).hidden = false;
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).textContent = `Successfully applied '${CouponCodeInput.value}'`;
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).style.color = 'rgb(10, 160, 67)';
          CouponCodeSubmitButton.hidden = true;
          CouponCodeInput.disabled = 0
          discountValid = true;
        }
        else
        {
          CouponCodeInput.style.border = '2px solid rgb(199, 1, 1)';
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).hidden = false;
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).textContent = `The coupon code '${CouponCodeInput.value}' is not valid.`;
          (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).style.color = 'rgb(199, 1, 1)';
          CouponCodeSubmitButton.disabled = false;
          discountValid = false;
        }
      if (CouponCodeSubmitButton?.id === ids.CouponInputButtonLoading )
        {
        setTimeout(() => {
          CouponCodeSubmitButton.id = '';
        CouponCodeSubmitButton.disabled = discountValid;
        }, 500);
        }
    }
    ) 
    }
  }
  else
  {
    CouponCodeInput.style.border = '2px solid rgb(199, 1, 1)';
    (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).hidden = false;
    (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).textContent = `The coupon code is too short.`;
    (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).style.color = 'rgb(199, 1, 1)';
  }
  }}>
    <FormInput className={classes.CouponInput} type="text" name="coupon" required placeholder="Promo Code" maxLength={10} id={ids.CouponCodeInput} onInput={ 
      (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (event.type) {
        case "input": {
        event.target.value = event.target.value.toUpperCase().replace(/([^A-Z0-9])/g, "");
        if((document.getElementById(ids.CouponInputError) as HTMLParagraphElement).hidden === false)
        {
        (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).hidden = true;
        (event.target as HTMLInputElement).style.border = '2px solid var(--main-bg-accentColor)';
        }
        if (event.target.value.length > 0)
          {
            setIsDisabled(false);
          }
          else
          {
            setIsDisabled(true);
          }
      }
    }
  } }/>
      <FormInput className={classes.CouponInput} form={ids.CouponForm} disabled={isDisabled} type="submit" name="couponButton" value="Apply" required/>
      <p hidden={true} id={ids.CouponInputError}>The coupon is not valid.</p>
    </form>
    </div>
    </div>
  )
}

export default CouponForm