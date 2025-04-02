import classes from "../CheckoutCart/CheckoutCart.module.css"
import ids from "../CheckoutCart/CheckoutCart.module.css"
import CartItem from "../../models/CartItem"
import CouponForm from "../CouponForm/CouponForm"
import { useState } from "react"
interface CartProps {
  cartItems: CartItem[];
  cartTotal: number;
  className?: string;
  cartItemAmount: number;
}
const CheckoutCart = ({ cartItems,  cartTotal, className, cartItemAmount}: CartProps) : JSX.Element => {

  const[subTotal, setSubtotal] = useState(
    {
    displayCurrencyValue :  cartTotal,
    displayCurrencyValueType : '', 
    displayCurrencyValueSymbol: '', 
    displayItemAmount : 0, 
    IsDiscounted: false,
    displayTotalString: 'Total'});

  const applyDiscountPercentage = (DiscountPercentage: number) => {
    console.log(DiscountPercentage);
    if (!subTotal.IsDiscounted) {
      cartTotal = cartTotal - (cartTotal * (DiscountPercentage / 100));
    setSubtotal({ 
      displayCurrencyValue :  cartTotal,
      displayCurrencyValueType : subTotal.displayCurrencyValueType, 
      displayCurrencyValueSymbol: subTotal.displayCurrencyValueSymbol, 
      displayItemAmount : subTotal.displayItemAmount,
      IsDiscounted : true,
      displayTotalString: ` ${DiscountPercentage}% discounted total`});
    }
  };
  let CheckoutCart = <></>;

  if(cartItemAmount > 0)
  {
    CheckoutCart = <>
    <div className={classes.CheckoutCartContainer}>
    {cartItems.map((cartItem) => (
          <div className={`${classes.CheckoutCartItem} ${className ? className : ''}`} key={cartItem.sku}>
              <div className={classes.quantityNumber}>{cartItem.quantityNumber}</div>
              <div className={classes.CheckoutCartItem}>
              <img className={classes.img}src={cartItem.productImageBinData} alt='ProductImage'/>
              <p className={classes.p} id={ids.pItemName}><span>{cartItem.displayItemName}</span></p></div>
              <p className={classes.pItemPrice}>{`${cartItem.displayCurrencyValueSymbol} ${(cartItem.displayCurrencyValue * cartItem.quantityNumber)}` }</p>
              <div hidden={true}>{ subTotal.displayCurrencyValueType = cartItem.displayCurrencyValueType}
                                { subTotal.displayItemAmount = cartItemAmount}
                                { subTotal.displayCurrencyValueSymbol = cartItem.displayCurrencyValueSymbol}
              </div>
          </div>
    ))
    }
        <div className={classes.CheckoutCartSubtotal}>
          <CouponForm applyCouponDiscount={applyDiscountPercentage}/>
        </div>
        <div className={classes.CheckoutCartSubtotal}>
              <p className={classes.pSubtotal} id={ids.pLight}><span id={ids.pSpan}>{
              `Subtotal • ${cartItemAmount} items`
              }
              </span></p>
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
    </>;
  }
  return ( CheckoutCart )
}
export default CheckoutCart