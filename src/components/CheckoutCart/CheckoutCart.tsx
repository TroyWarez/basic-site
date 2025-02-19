import classes from "../CheckoutCart/CheckoutCart.module.css"
import ids from "../CheckoutCart/CheckoutCart.module.css"
import CartItem from "../../models/CartItem"
import CouponForm from "../CouponForm/CouponForm"
import { useState } from "react"
interface CartProps {
  cartItems: CartItem[];
  className?: string;
}
const CheckoutCart = ({ cartItems, className}: CartProps) : JSX.Element => {

  const[subTotal, setSubtotal] = useState(
    { 
    displayCurrencyValue : 0.00, 
    displayCurrencyValueType : '', 
    displayCurrencyValueSymbol: '', 
    displayItemAmount : 0, 
    IsDiscounted: false,
    displayTotalString: 'Total'});
  const applyDiscountPercentage = (DiscountPercentage: number) => {
    console.log(DiscountPercentage);
    if (!subTotal.IsDiscounted) {
    setSubtotal({displayCurrencyValue:   subTotal.displayCurrencyValue - (subTotal.displayCurrencyValue * (DiscountPercentage / 100)), 
      displayCurrencyValueType : subTotal.displayCurrencyValueType, 
      displayCurrencyValueSymbol: subTotal.displayCurrencyValueSymbol, 
      displayItemAmount : subTotal.displayItemAmount,
      IsDiscounted : true,
      displayTotalString: ` ${DiscountPercentage}% discounted total`});
    }
  };
  return (
    <>
    <div className={classes.CheckoutCartContainer}>
    {cartItems.map((cartItem) => (
          <div className={`${classes.CheckoutCartItem} ${className ? className : ''}`} key={cartItem.sku}>
              <div className={classes.quantityNumber}>{cartItem.quantityNumber}</div>
              <div className={classes.CheckoutCartItem}>
              <img className={classes.img}src={cartItem.productImagePath} alt='ProductImage'/>
              <p className={classes.p} id={ids.pItemName}><span>{cartItem.displayItemName}</span></p></div>
              <p className={classes.pItemPrice}>{`${cartItem.displayCurrencyValueSymbol} ${(cartItem.displayCurrencyValue * cartItem.quantityNumber)}` }</p>
              <div hidden={true}>{(subTotal.IsDiscounted) ? subTotal.displayCurrencyValue : subTotal.displayCurrencyValue = subTotal.displayCurrencyValue + (cartItem.displayCurrencyValue * cartItem.quantityNumber)};
                                {subTotal.displayCurrencyValueType = cartItem.displayCurrencyValueType}
                                {(subTotal.IsDiscounted) ? subTotal.displayItemAmount : subTotal.displayItemAmount += cartItem.quantityNumber}
                                {subTotal.displayCurrencyValueSymbol = cartItem.displayCurrencyValueSymbol}
              </div>
          </div>
    ))
    }
        <div className={classes.CheckoutCartSubtotal}>
          <CouponForm applyCouponDiscount={applyDiscountPercentage}/>
        </div>
        <div className={classes.CheckoutCartSubtotal}>
              <p className={classes.pSubtotal} id={ids.pLight}><span>{`Subtotal • ${subTotal.displayItemAmount} items`}</span></p>
              <p className={classes.pSubtotal}><span>{`${subTotal.displayCurrencyValueSymbol} ${subTotal.displayCurrencyValue.toFixed(2)}`}</span></p>
        </div>
        <div className={classes.CheckoutCartSubtotal}>
              <p className={classes.pShippingTotal}><span>{`Shipping`}</span></p>
              <p className={classes.pShippingTotal}><span>{`Enter Shipping Address`}</span></p>
        </div>
        <div className={classes.CheckoutCartSubtotal}>
          <p className={`${classes.p} ${classes.pTotal}`}><span>{subTotal.displayTotalString}</span></p>
          <p className={`${classes.p} ${classes.pTotal}`} id={classes.pCurrency}><span>{`${subTotal.displayCurrencyValueType}`}&nbsp;</span>
          <span className={`${classes.p} ${classes.pTotal}`}><span>
          {`${subTotal.displayCurrencyValueSymbol}  ${subTotal.displayCurrencyValue.toFixed(2)}`}</span></span></p>
        </div>
    </div>
    </>
 
  )
}
export default CheckoutCart