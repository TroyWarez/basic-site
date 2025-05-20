import classes from "./GuestLogin.module.css"
import ids from "../CouponForm/CouponForm.module.css"
import Cartclasses from "../ShoppingCart/ShoppingCart.module.css"
import FormInput from "../FormInput/FormInput"
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const GuestLogin = ()  : JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHidden, setHidden] = useState(true)
  return (
    <div className={classes.container}>
        <div className={classes.signInContainer}>
            <p className={`${classes.p} ${classes.p2}`}><b>Sign in to your account</b></p>
            <p className={classes.p2}>Sign in to check out faster</p>
            <input onClick={(event) => {
            event.preventDefault();
            navigate("/customer/account/login", {state: { username: (location.state) ? location.state['username'] : '', userId: (location.state) ? location.state['userId'] : 0 }});
          }} className={`${Cartclasses.buttonSignIn} ${classes.button}`} type="button" placeholder="Log In" title="Log In" value="Log In" />
            <div className={classes.OrHorizontalContainer}>
                <div className={classes.HorizontalAccent}></div>
                <p className={classes.OrHorizontalP}><b>OR</b></p>
                <div className={classes.HorizontalAccent}></div>
            </div>
            <p className={`${classes.p} ${classes.p2}`}><b>Don't have an account?</b></p>
            <p className={classes.p2}>Create one today and enjoy:</p>
            <div className={classes.BenfitsContainer}>
                
            <div className={classes.CheckmarkContainer}>
                <p className={classes.Checkmark}>✔</p><p className={`${classes.p2} ${classes.p3}`}>Faster checkout</p>
            </div>
            <div className={classes.CheckmarkContainer}>
                <p className={classes.Checkmark}>✔</p><p className={`${classes.p2} ${classes.p3}`}>Easy order tracking</p>
            </div>
            <div className={classes.CheckmarkContainer}>
                <p className={classes.Checkmark}>✔</p><p className={`${classes.p2} ${classes.p3}`}>Exclusive discounts</p>
            </div>

            <p className={classes.p2}>Your journey starts here, create your account in seconds and elevate your experience.</p>

            <input onClick={(event) => {
            event.preventDefault();
            navigate("/signup", {state: { username: (location.state) ? location.state['username'] : '', userId: (location.state) ? location.state['userId'] : 0 }});
          }} className={`${Cartclasses.buttonSignIn} ${Cartclasses.buttonColored} ${classes.buttonClear}`} type="button" placeholder="Create your account" title="Create your account" value="Create your account" />
            </div>
        </div>
        <div className={classes.OrVerticalContainer}>
                <div className={classes.VerticalAccent}></div>
                <p className={classes.OrVerticalP}><b>OR</b></p>
                <div className={classes.VerticalAccent}></div>
        </div>
        <div className={classes.signInContainer}>
            <p className={`${classes.p} ${classes.p2}`}><b>Checkout as a guest</b></p>
            <p className={classes.p2}>You can create an account later</p>
            <form className={classes.form} onSubmit={(event) => {
             event.preventDefault();
            navigate("/checkout/", {state: { username: '', userId: 0, discount_code: (location.state) ? location.state['discount_code'] : '', discount_percent: (location.state) ? location.state['discount'] : 0, autoFillEmail: (event.currentTarget.form) ? event.currentTarget.email.value : ''}})
            }} onInvalid={(e) => {
                e.preventDefault();
                setHidden(false);
            }}>
                <FormInput className={classes.formInput} name='email' type="text" label='' placeholder="john_smitch@example.com" title="john_smitch@example.com" required={true} noLabel={true} error_message="This is a required field." message="" validation_message="" tooShort_message="" minLength={1} maxLength={20}/>
                <p id={ ids.CouponInputError } className={classes.formErrorLabel}hidden={isHidden}>This is a required field.</p>
                <div className={classes.formRadioLabelContainer}>
                <input className={classes.formInputRadio} type="checkbox" required={false} id={`promo_emails ${classes.formInputButton}`}/>
                <label className={classes.formRadioLabel} htmlFor={`promo_emails ${classes.formInputButton}`}>I would like to receive communications about store news, offers, products, and promotions.</label>
                </div>
                <FormInput required={true} className={`${Cartclasses.buttonSignIn} ${classes.button}`} type="submit" noLabel={true} placeholder="Continue as guest" title="Continue as guest" value="Continue as guest" error_message="" message="" validation_message="" tooShort_message=""/>
            </form>
        </div>
    </div>
  )
}

export default GuestLogin