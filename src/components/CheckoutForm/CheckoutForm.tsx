
import CheckoutCart from '../../components/CheckoutCart/CheckoutCart';
import OrderForm from '../../components/OrderForm/OrderForm';
import classes from './CheckoutForm.module.css';
const CheckoutForm = (): JSX.Element  => {
  return (
    <div className={classes.checkoutform}>
        <OrderForm/>
        <CheckoutCart cartItemAmount={14} cartTotal={1}/>
    </div>
  )
}

export default CheckoutForm