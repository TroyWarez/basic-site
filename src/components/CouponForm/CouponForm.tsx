import FormInput from "../FormInput/FormInput"
import classes from '../CouponForm/CouponForm.module.css'
import ids from '../CouponForm/CouponForm.module.css'
import storeApiService from "../../services/storeApiService";
import { useState } from "react";
interface CouponFormProps {
  applyCouponDiscount: (discountPercentage: number, discountCode: string) => void;
}
const CouponForm = (Props: CouponFormProps) : JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [couponMessage, setCouponMessage] = useState('The coupon is not valid.');
  const [couponValid, setCouponValid] = useState(false);
  const [couponInputClass, setCouponInputClass] = useState('');
  return (
    <div className={classes.CouponContainer}>
    <div className={classes.DropdownContainer} onClick={() => {
      (isCollapsed) ? setIsCollapsed(false) : setIsCollapsed(true);
    }}>
    <p className={classes.p}><b>Enter Promo Code</b> (Optional)</p>
    <input type='button' value='>' className={`${(isCollapsed) ? classes.DropdownButtonDown : classes.DropdownButtonUp }`}
    />
    
    </div>
    <div className={`${(isCollapsed) ? classes.FormContainerHidden : classes.FormContainer }`}>
    <form id={ids.form} onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
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
          Props.applyCouponDiscount(discountPercentage, CouponCodeInput.value);
          CouponCodeInput.style.border = '1px solid rgb(10, 160, 67)';
          setIsHidden(false);
          setCouponMessage(`Successfully applied '${CouponCodeInput.value}'`);
          setCouponValid(true);
          CouponCodeSubmitButton.hidden = true;
          CouponCodeInput.disabled = true;
          discountValid = true;
        }
        else
        {
          CouponCodeInput.style.border = '1px solid rgb(199, 1, 1)';
          setIsHidden(false);
          setCouponMessage(`The coupon code '${CouponCodeInput.value}' is not valid.`);
          setCouponValid(false);
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
    CouponCodeInput.style.border = '1px solid rgb(199, 1, 1)';
    setIsHidden(false);
    setCouponMessage(`The coupon code '${CouponCodeInput.value}' is not valid.`);
    (document.getElementById(ids.CouponInputError) as HTMLParagraphElement).style.color = 'rgb(199, 1, 1)';
  }
  }}>
    <div id={ids.CouponTextInputButton}>

    <div id={ids.CouponTextInputSubmitButton}>
    <FormInput className={classes.CouponInput} form={ids.form} type="text" noLabel={true} name="coupon" error_message='' message='' tooShort_message='' validation_message='' maxlength={10} id={ids.CouponCodeInput} onInput={ 
      (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (event.type) {
        case "input": {
        event.target.value = event.target.value.toUpperCase().replace(/([^A-Z0-9])/g, "");
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
  } }
    onBlur={(e) => {
      if(e.target.value.length === 0) {
      setCouponInputClass(classes.CouponCodeLabelBackwards);
    }}}
    onFocus={(e) => {
      if(e.target.value.length === 0) {
      setCouponInputClass(classes.CouponCodeLabelForwards);
    }}}
    />
      <label htmlFor={ids.CouponCodeInput} className={`${classes.CouponCodeLabel} ${couponInputClass}`}>Promo Code</label>
        <FormInput className={classes.CouponInput} id={ids.CouponButtonApply} form={ids.CouponForm} disabled={isDisabled} noLabel={true} error_message='' message='' tooShort_message='' validation_message='' type="submit" name="couponButton" value="Apply" required={true}/>
    </div>
      <p id={(couponValid) ? ids.CouponInputGreenText : ids.CouponInputError } hidden={isHidden}>{couponMessage}</p>
      </div>
    </form>
    </div>
    </div>
  )
}

export default CouponForm