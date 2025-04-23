import classes from "./GuestLogin.module.css"
import ids from "../CouponForm/CouponForm.module.css"
import Cartclasses from "../ShoppingCart/ShoppingCart.module.css"
import FormInput from "../FormInput/FormInput"
import { useState } from "react";
const GuestLogin = ()  : JSX.Element => {
    const [isHidden, setHidden] = useState(true)
  return (
    <div className={classes.container}>
        <div className={classes.signInContainer}>
            <p className={`${classes.p} ${classes.p2}`}><b>Sign in to your account</b></p>
            <p className={classes.p2}>Sign in to check out faster</p>
            <input className={`${Cartclasses.buttonSignIn} ${classes.button}`} type="button" placeholder="Sign In" title="Sign In" value="Sign In" />
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

            <input className={`${Cartclasses.buttonSignIn} ${Cartclasses.buttonColored} ${classes.buttonClear}`} type="button" placeholder="Create your account" title="Create your account" value="Create your account" />
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
            <form className={classes.form} onInvalid={(e) => {
                e.preventDefault();
                setHidden(false);
            }}>
                <FormInput className={classes.formInput} type="text" placeholder="john_smitch@example.com" title="john_smitch@example.com" required={true}/>
                <p id={ ids.CouponInputError } className={classes.formErrorLabel}hidden={isHidden}>This is a required field.</p>
                <div className={classes.formRadioLabelContainer}>
                <input className={classes.formInputRadio} type="checkbox" required={false} id={`promo_emails ${classes.formInputButton}`}/>
                <label className={classes.formRadioLabel} htmlFor={`promo_emails ${classes.formInputButton}`}>I would like to receive communications about store news, offers, products, and promotions.</label>
                </div>
                <FormInput className={`${Cartclasses.buttonSignIn} ${classes.button}`} type="submit" placeholder="Continue as guest" title="Continue as guest" value="Continue as guest" />
            </form>
        </div>
    </div>
  )
}

export default GuestLogin