import classes from "../CheckoutCart/CheckoutCart.module.css"
import ids from "../CheckoutCart/CheckoutCart.module.css"
import CartItem from "../../models/CartItem"
import CouponForm from "../CouponForm/CouponForm"
import storeApiService from "../../services/storeApiService";
import { useState, useEffect } from "react"
interface CartProps {
  className?: string;
  cartItemAmount: number;
}
const CheckoutCart = ({className, cartItemAmount}: CartProps) : JSX.Element => {

  const[subTotal, setSubtotal] = useState(
    { 
    displayCurrencyValue : 0.00, 
    displayCurrencyValueType : '', 
    displayCurrencyValueSymbol: '', 
    displayItemAmount : 0, 
    IsDiscounted: false,
    displayTotalString: 'Total'});
    subTotal.displayCurrencyValue = 0.00;
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

  const[cartItems, setCartitems] = useState<CartItem[]>([]);
  const[loadingFlag, setloadingFlag] = useState(false);
  useEffect(() => { 
    if(loadingFlag == false) {
    const cartItemsdb = storeApiService.getCartData('Debug');
    cartItemsdb.then((cartItemsFound) => {
      if(cartItems.length === 0){
        setCartitems(cartItemsFound);
      }
    })
    }
    setloadingFlag(true);
  });

  return (
    <>
    <div className={classes.CheckoutCartContainer}>
    {cartItems.map((cartItem) => (
          <div className={`${classes.CheckoutCartItem} ${className ? className : ''}`} key={cartItem.sku}>
              <div className={classes.quantityNumber}>{cartItem.quantityNumber}</div>
              <div className={classes.CheckoutCartItem}>
              <img className={classes.img}src={cartItem.productImageBinData} alt='ProductImage'/>
              <p className={classes.p} id={ids.pItemName}><span>{cartItem.displayItemName}</span></p></div>
              <p className={classes.pItemPrice}>{`${cartItem.displayCurrencyValueSymbol} ${(cartItem.displayCurrencyValue * cartItem.quantityNumber)}` }</p>
              <div hidden={true}>{subTotal.displayCurrencyValue += (cartItem.displayCurrencyValue * cartItem.quantityNumber)};
                                {subTotal.displayCurrencyValueType = cartItem.displayCurrencyValueType}
                                { subTotal.displayItemAmount = cartItemAmount}
                                {subTotal.displayCurrencyValueSymbol = cartItem.displayCurrencyValueSymbol}
              </div>
          </div>
    ))
    }
        <div className={classes.CheckoutCartSubtotal}>
          <CouponForm applyCouponDiscount={applyDiscountPercentage}/>
        </div>
        <div className={classes.CheckoutCartSubtotal}>
              <p className={classes.pSubtotal} id={ids.pLight}><span id={ids.pSpan}>{
              `Subtotal • ${subTotal.displayItemAmount} items`
              }
              </span></p>
              <p className={classes.pSubtotal}><span>{`${subTotal.displayCurrencyValueSymbol} ${subTotal.displayCurrencyValue}`}</span></p>
        </div>
        <div className={classes.CheckoutCartSubtotal}>
              <p className={classes.pShippingTotal}><span>{`Shipping`}</span></p>
              <p className={classes.pShippingTotal}><span>{`Enter Shipping Address`}</span></p>
        </div>
        <div className={classes.CheckoutCartSubtotal}>
          <p className={`${classes.p} ${classes.pTotal}`}><span>{subTotal.displayTotalString}</span></p>
          <p className={`${classes.p} ${classes.pTotal}`} id={classes.pCurrency}><span>{`${subTotal.displayCurrencyValueType}`}&nbsp;</span>
          <span className={`${classes.p} ${classes.pTotal}`}><span>
          {`${subTotal.displayCurrencyValueSymbol}  ${subTotal.displayCurrencyValue}`}</span></span></p>
        </div>
    </div>
    </>
 
  )
}
export default CheckoutCart