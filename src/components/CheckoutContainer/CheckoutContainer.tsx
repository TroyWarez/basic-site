import classes from './CheckoutContainer.module.css'
import CheckoutCart from '../CheckoutCart/CheckoutCart'
import CartItem from "../../models/CartItem.tsx";
import OrderForm from '../OrderForm/OrderForm';
import NavigationBar from "../../components/NavigationBar/NavigationBar"
const CheckoutContainer = () : JSX.Element => {
  const cartItems: CartItem[] = [ //Fetch from db.
    {sku: 0, displayCurrencyValue: 29.99, displayCurrencyValueType:'USD', displayCurrencyValueSymbol:'$', productImagePath:'Toy Car Blue.jpg', displayItemName: 'Toy Car Blue', quantityNumber: 4},
    {sku: 1, displayCurrencyValue: 39.99, displayCurrencyValueType:'USD', displayCurrencyValueSymbol:'$', productImagePath:'Toy Car Red.jpg', displayItemName: 'Toy Car Red', quantityNumber: 2},
    {sku: 2, displayCurrencyValue: 49.99, displayCurrencyValueType:'USD', displayCurrencyValueSymbol:'$', productImagePath:'Toy Car Green.jpg', displayItemName: 'Toy Car Green', quantityNumber: 7}];
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