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
const SignupForm = () : JSX.Element => {
  const [invisibleClass, setInvisibleClass] = useState(classes.invisible);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
              const navitgate = useNavigate();

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const password = event.currentTarget.password as HTMLInputElement;
        if(form && form.checkValidity()){
          setIsSubmitting(true);
          const Response = await storeApiService.LoginUser(form.username.value, password.value);
          setIsSubmitting(false);
          if(Response.status === 200) {
            navitgate('/');
          }
          else {
             setErrorMessage(`${Response.statusText} Response code: ${Response.status}`);
             setInvisibleClass('');
          }
          return;
      }
      };
  return (
    <>
    <form className={`${classes.formcontainer} ${checkoutClasses.form}`} onSubmit={onSubmitHandler}>
            <h2>Login</h2>
            <p>Please enter your username and password below to proceed.</p>
        <br/>
        
    <FormInput type="text" pattern="[A-Za-z0-9]+" name="username"  id="username" label="Username" error_message='Invalid Username' message='' tooShort_message='This username is too short' validation_message='Invalid Username' title="Username" autoFocus required minlength={2} maxLength={20}/>
    <FormInput type="password" pattern="^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}" name="password"  id="password" label="Password" error_message='Invalid Password' message='' tooShort_message='This password is too short' validation_message='Invalid Password' title="Password" required={true} minlength={8} maxLength={20}/>
  
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
      value="Login"/>
    <b>Don't have an account? Click <Link to='/signup' className={CartClasses.AltText}>here</Link> to sign up.</b>
    </form>
    </>
  )
}

export default SignupForm;