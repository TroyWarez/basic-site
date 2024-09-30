import classes from './CheckoutContainer.module.css'
import CheckoutCart from '../CheckoutCart/CheckoutCart'
import CartItem from "../../models/CartItem.tsx";
import OrderForm from '../OrderForm/OrderForm'
const CheckoutContainer = () => {
  const cartItems: CartItem[] = [
    {displayCurrencyValue:'$29.99', productImagePath:'Toy Car.jpg', displayItemName: 'Toy Car Blue', quantityNumber: 1},
    {displayCurrencyValue:'$39.99', productImagePath:'Toy Car Red.jpg', displayItemName: 'Toy Car Red', quantityNumber: 1}];
  return (
    <div className={classes.CheckoutContainer}>
        <OrderForm/>
        <CheckoutCart cartItems={cartItems}/>
    </div>
  )
}

export default CheckoutContainer