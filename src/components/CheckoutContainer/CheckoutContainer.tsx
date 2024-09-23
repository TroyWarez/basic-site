import classes from './CheckoutContainer.module.css'
import CheckoutCart from '../CheckoutCart/CheckoutCart'
import OrderForm from '../OrderForm/OrderForm'
const CheckoutContainer = () => {
  return (
    <div className={classes.CheckoutContainer}>
        <OrderForm/>
        <CheckoutCart/>
    </div>
  )
}

export default CheckoutContainer