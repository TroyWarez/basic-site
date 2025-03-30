import classes from './CheckoutContainer.module.css'
import CheckoutCart from '../CheckoutCart/CheckoutCart'
import OrderForm from '../OrderForm/OrderForm';
import NavigationBar from "../../components/NavigationBar/NavigationBar"
const CheckoutContainer = () : JSX.Element => {
  return (
    <>
    <NavigationBar cartItemAmount={0}/>
    <div className={classes.CheckoutContainer}>
        <OrderForm/>
        <CheckoutCart cartItemAmount={0}></CheckoutCart>
    </div>
    </>
  )
}
export default CheckoutContainer