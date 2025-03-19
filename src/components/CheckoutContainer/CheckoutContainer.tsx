import classes from './CheckoutContainer.module.css'
import CheckoutCart from '../CheckoutCart/CheckoutCart'
import CartItem from "../../models/CartItem.tsx";
import OrderForm from '../OrderForm/OrderForm';
import NavigationBar from "../../components/NavigationBar/NavigationBar"
import storeApiService from "../../services/storeApiService";
const CheckoutContainer = () : JSX.Element => {
  let test = storeApiService.getCartData();
  console.log(test);
  const cartItems: CartItem[] = [];
    let ItemAmount = 0;
    for (const CartItem of cartItems) {
      ItemAmount += CartItem.quantityNumber;
    }
  return (
    <>
    <NavigationBar cartItemAmount={0}/>
    <div className={classes.CheckoutContainer}>
        <OrderForm/>
        <CheckoutCart cartItems={cartItems} cartItemAmount={ItemAmount}></CheckoutCart>
    </div>
    </>
  )
}
export default CheckoutContainer