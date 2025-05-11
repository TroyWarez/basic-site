import checkoutClasses from '../OrderForm/OrderForm.module.css'
import GuestClasses from '../GuestLogin/GuestLogin.module.css'
import ShoppingCartClasses from '../ShoppingCart/ShoppingCart.module.css';
import classes from '../SignupForm/SignupForm.module.css'
import CartClasses from '../ShoppingCart/ShoppingCart.module.css'
import FormInput from '../FormInput/FormInput';
import { Link } from "react-router-dom";
const SignupForm = () : JSX.Element => {
  return (
    <>
    <form className={`${classes.formcontainer} ${checkoutClasses.form}`}>
        <h2>Create Your Store Account</h2>
        <p>Sign up benefits: Save your shipping address and cart for later!</p>
        <br/>
        
    <FormInput type="text" pattern="[A-Za-z0-9'\.\-\s\,]+" name="username"  id="username" label="Username" error_message='Invalid Username' message='' tooShort_message='This username is too short' validation_message='Invalid Username' title="Username" required={true} minlength={2} maxLength={20}/>
    <FormInput type="password" pattern="[A-Za-z0-9'\.\-\s\,]+" name="password"  id="password" label="Password" error_message='Invalid Password' message='' tooShort_message='This password is too short' validation_message='Invalid Password' title="Password" required={true} minlength={6} maxLength={20}/>
    <FormInput type="password" pattern="[A-Za-z0-9'\.\-\s\,]+" name="confirmpassword"  id="confirmpassword" label="Re-enter Password" error_message='Invalid Password' message='Must contain numbers and symbols' tooShort_message='This password is too short' validation_message='Invalid Password' title="Password" required={true} minlength={6} maxLength={20}/>
    <FormInput className={`${ShoppingCartClasses.buttonSignIn} ${GuestClasses.button}`} divclassName={classes.submit} type="submit" name="submitButton" error_message='' message='' validation_message='' tooShort_message='' required={true} disabled value="Sign Up"/>
    <b>Already have an account? Click <Link to='/login' className={CartClasses.AltText}>here</Link> to login.</b>
    </form>
    </>
  )
}

export default SignupForm;