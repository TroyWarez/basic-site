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
    <div className={classes.CheckoutCartContainer}>
    {cartItems.map((cartItem) => (
          <div className={`${classes.CheckoutCartItem} ${className ? className : ''}`} key={cartItem.sku}>
              <div className={classes.quantityNumber}>{cartItem.quantityNumber}</div>
              <img className={classes.img}src={cartItem.productImagePath} alt='ProductImage'/>
              <p className={classes.p}><span>{cartItem.displayItemName}</span></p>
              <p className={classes.pItemPrice}>{`$ ${cartItem.displayCurrencyValue}` }</p>
              <div hidden={true}>{subTotal.displayCurrencyValue = subTotal.displayCurrencyValue + cartItem.displayCurrencyValue}
                                {subTotal.displayCurrencyValueType = cartItem.displayCurrencyValueType}
              </div>
          </div>
    ))
    }
        <div className={classes.CheckoutCartSubtotal}>
              <p className={classes.pSubtotal}><span>{`Subtotal • ${cartItems.length} Items`}</span></p>
              <p className={classes.pItemPrice}><span>{`$ ${subTotal.displayCurrencyValue} ${subTotal.displayCurrencyValueType}`}</span></p>
        </div>
    </div>
    </>
 
  )
}
export default CheckoutCart