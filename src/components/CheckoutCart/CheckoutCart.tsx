import classes from "../CheckoutCart/CheckoutCart.module.css"
import CartItem from "../../models/CartItem"
interface CartProps {
  cartItems: CartItem[];
  className?: string;
}
const CheckoutCart = ({ cartItems, className}: CartProps) => {
  const subTotal = { displayCurrencyValue : 0.00, displayCurrencyValueType : ''};
  return (
    <>
    <div>
    {cartItems.map((cartItem) => (
          <div className={`${classes.CheckoutCart} ${className}`}>
              <p className={classes.quantityNumber}>{cartItem.quantityNumber}</p>
              <img src={cartItem.productImagePath} alt='ProductImage'/>
              <p className={classes.p}>{cartItem.displayItemName}</p>
              <p className={classes.p}>{`Price $ ${cartItem.displayCurrencyValue} ${cartItem.displayCurrencyValueType}` }</p>
              <div hidden={true}>{subTotal.displayCurrencyValue = subTotal.displayCurrencyValue + cartItem.displayCurrencyValue}
                                  {subTotal.displayCurrencyValueType = cartItem.displayCurrencyValueType}
              </div>
          </div>
    ))
    }
              <p className={classes.p}>{`Subtotal * ${cartItems.length} Items $ ${subTotal.displayCurrencyValue} ${subTotal.displayCurrencyValueType}`}</p>
    </div>
    </>

  )
}
export default CheckoutCart