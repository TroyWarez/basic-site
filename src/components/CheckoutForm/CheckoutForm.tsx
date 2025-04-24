
import CheckoutCart from '../../components/CheckoutCart/CheckoutCart';
import OrderForm from '../../components/OrderForm/OrderForm';
import classes from './CheckoutForm.module.css';
const CheckoutForm = (): JSX.Element  => {
  return (
    <div className={classes.formContainer}>
        <OrderForm/>
        <CheckoutCart SignInPagePath="/customer/account/login/"/>
    </div>
  )
}

export default CheckoutForm