import classes from "../CheckoutCart/CheckoutCart.module.css"
import CartItem from "../../models/CartItem"
interface CartProps {
  cartItems: CartItem[];
  className?: string;
}
const CheckoutCart = ({ cartItems, className}: CartProps) : JSX.Element => {
  const subTotal = { displayCurrencyValue : 0.00, displayCurrencyValueType : '', displayCurrencyValueSymbol: '', displayItemAmount : 0};
  return (
    <>
    <div className={classes.CheckoutCartContainer}>
    {cartItems.map((cartItem) => (
          <div className={`${classes.CheckoutCartItem} ${className ? className : ''}`} key={cartItem.sku}>
              <div id={classes.quantityNumber}>{cartItem.quantityNumber}</div>
              <img className={classes.img}src={cartItem.productImagePath} alt='ProductImage'/>
              <p className={classes.p}><span>{cartItem.displayItemName}</span></p>
              <p className={classes.pItemPrice}>{`${cartItem.displayCurrencyValueSymbol} ${cartItem.displayCurrencyValue}` }</p>
              <div hidden={true}>{subTotal.displayCurrencyValue = subTotal.displayCurrencyValue + (cartItem.displayCurrencyValue * cartItem.quantityNumber)}
                                {subTotal.displayCurrencyValueType = cartItem.displayCurrencyValueType}
                                {subTotal.displayItemAmount += cartItem.quantityNumber}
                                {subTotal.displayCurrencyValueSymbol = cartItem.displayCurrencyValueSymbol}
              </div>
          </div>
    ))
    }
        <div className={classes.CheckoutCartSubtotal}>
              <p><span>{`Subtotal • ${subTotal.displayItemAmount} items`}</span></p>
              <p id={classes.pSubtotal}><span>{`${subTotal.displayCurrencyValueSymbol} ${subTotal.displayCurrencyValue.toFixed(2)}`}</span></p>
        </div>
        <div className={classes.CheckoutCartSubtotal}>
              <p className={classes.pShippingTotal}><span>{`Shipping`}</span></p>
              <p className={classes.pShippingTotal}><span>{`Enter Shipping Address`}</span></p>
        </div>
        <div className={classes.CheckoutCartSubtotal}>
          <p className={`${classes.p} ${classes.pTotal}`}><span>{`Total`}</span></p>
          <p className={`${classes.p} ${classes.pTotal}`} id={classes.pCurrency}><span>{`${subTotal.displayCurrencyValueType}`}</span></p>
          <p className={`${classes.p} ${classes.pTotal}`}><span>
            {`${subTotal.displayCurrencyValueSymbol} ${subTotal.displayCurrencyValue.toFixed(2)}`}</span></p>
        </div>
    </div>
    </>
 
  )
}
export default CheckoutCart