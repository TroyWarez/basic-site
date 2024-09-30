import classes from "../CheckoutCart/CheckoutCart.module.css"
import CartItem from "../../models/CartItem"
interface CartProps {
  cartItems: CartItem[];
  className?: string;
}
const CheckoutCart = ({ cartItems, className}: CartProps) => {
  let subtotal = 0.00;
  return (
    <>
    <div>
    {cartItems.map((cartItem) => (
          <div className={`${classes.CheckoutCart} ${className}`}>
              <p className={classes.quantityNumber}>{cartItem.quantityNumber}</p>
              <img src={cartItem.productImagePath} alt='ProductImage'/>
              <p className={classes.p}>{cartItem.displayItemName}</p>
              <p className={classes.p}>{`Subtotal * ${cartItems.length} Items $ ${subtotal = subtotal + cartItem.displayCurrencyValue} ${cartItem.displayCurrencyValueType}`}</p>
          </div>
    ))}
    </div>
    </>

  )
}
export default CheckoutCart