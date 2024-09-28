import classes from './CheckoutContainer.module.css'
import CheckoutCart from '../CheckoutCart/CheckoutCart'
import CartItem from "../../models/CartItem.tsx";
import OrderForm from '../OrderForm/OrderForm'
const CheckoutContainer = () => {
  const cartItems: CartItem[] = [
    {displayCurrencyValue:'$29.99', productImagePath:'Toy Car.jpg', displayItemName: 'Toy Car Red'}];
  return (
    <div className={classes.CheckoutContainer}>
        <OrderForm/>
        <CheckoutCart cartItems={cartItems}/>
    </div>
  )
}

export default CheckoutContainer