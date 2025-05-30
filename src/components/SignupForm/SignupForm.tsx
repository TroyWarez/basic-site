import checkoutClasses from '../OrderForm/OrderForm.module.css'
import GuestClasses from '../GuestLogin/GuestLogin.module.css'
import ShoppingCartClasses from '../ShoppingCart/ShoppingCart.module.css';
import classes from '../SignupForm/SignupForm.module.css'
import CartClasses from '../ShoppingCart/ShoppingCart.module.css'
import PaymentIds from '../OrderForm/OrderForm.module.css'
import FormInput from '../FormInput/FormInput';
import storeApiService from '../../services/storeApiService';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { AxiosError } from "axios";
const SignupForm = () : JSX.Element => {
  const [invisibleClass, setInvisibleClass] = useState(classes.invisible);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navitgate = useNavigate();

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const password = event.currentTarget.password as HTMLInputElement;
        const confirmpassword = event.currentTarget.confirmpassword as HTMLInputElement;
        if(form && form.checkValidity()){
        if(password && confirmpassword && password.value !== confirmpassword.value)
        {
          password.style.borderColor = '#eb1919';
          confirmpassword.style.borderColor = '#eb1919';
          setErrorMessage('The passwords do not match');
          setInvisibleClass('');
          return;
        }
        else
        {
          try {
          setIsSubmitting(true);
          const Response = await storeApiService.SignUpUser(form.username.value, password.value);
          
            navitgate('/', {
            state: { username: Response.username, userId: Response._id },
          });
        }
        catch(error : unknown)
        {
                    if (error instanceof AxiosError && error.response) {
                            setErrorMessage(error.response.data.message);
                            setInvisibleClass('');
                            setIsSubmitting(false);
                    }

        }
        }
      }
      };
  return (
    <>
    <form className={`${classes.formcontainer} ${checkoutClasses.form}`}
      onSubmit={onSubmitHandler}>
        <h2>Create Your Store Account</h2>
        <p>Sign up benefits: Save your shipping address and cart for later!</p>
        <br/>
        
    <FormInput type="text" autoComplete='username' pattern="[A-Za-z0-9]+" name="username"  id="username" label="Username" error_message='Invalid Username' message='' tooShort_message='This username is too short' validation_message='Invalid Username' title="Username" autoFocus required minlength={2} maxlength={30}/>
    <FormInput type="password" autoComplete='new-password' name="password"  id="password" label="Password" error_message='Invalid Password' message='' tooShort_message='This password is too short' validation_message='Invalid Password' title="Password" required={true} minlength={6} maxlength={30}/>
    <FormInput type="password" autoComplete='new-password' name="confirmpassword"  id="confirmpassword" label="Re-enter Password" error_message='Invalid Password' message='Should contain numbers and symbols with upper and lower case letters.' tooShort_message='This password is too short' validation_message='Invalid Password' title="Password" required={true} minlength={8} maxlength={32}/>
  
    <p className={`${classes.p} ${invisibleClass}`}>{errorMessage}</p>
    <FormInput 
      className={`${ShoppingCartClasses.buttonSignIn} ${GuestClasses.button}`}
      divclassName={classes.submit}
      id={PaymentIds.submit} 
      type="submit" 
      name="submitButton" 
      error_message='' 
      message='' 
      validation_message='' 
      tooShort_message='' 
      required
      disabled={isSubmitting}
      value="Sign Up"/>
    <b>Already have an account? Click<Link to='/login' className={CartClasses.AltText}> here</Link> to login.</b>
    </form>
    </>
  )
}

export default SignupForm;