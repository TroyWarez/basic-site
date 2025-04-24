import classes from "../CheckoutCart/CheckoutCart.module.css"
import ids from "../CheckoutCart/CheckoutCart.module.css"
import { useState } from "react"
import storeApiService from "../../services/storeApiService";
interface CartProps {
  className?: string;
}
const CheckoutCart = ({className}: CartProps) : JSX.Element => {
  const cartItems = storeApiService.getCartDatalocal();
  let cartTotal = 0;
  let cartItemAmount = cartItems.length;
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
              <div className={classes.CheckoutCartInfoItem}>
              <img className={classes.img}src={cartItem.productImageBinData} alt='ProductImage'/>
              <b><p className={classes.p} id={ids.pItemName}>{cartItem.displayItemName}</p></b>
              <div className={classes.CheckoutCartInfoItemContainer}>
              <p className={classes.pItemPrice}>Quantity:</p>
              <p className={classes.pItemPrice}>{cartItem.quantityNumber}</p>
              </div>
              <div className={classes.CheckoutCartInfoItemContainer}>
              <p className={classes.pItemPrice}>Price:</p>
              <div>
                <p className={classes.pItemPrice}>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${(cartItem.displayCurrencySaleValue * cartItem.quantityNumber)}` }</p>
                <s className={classes.pItemPriceRed}><p>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${(cartItem.displayCurrencyValue * cartItem.quantityNumber)}` }</p></s>
              </div>
              </div>
              <div className={classes.CheckoutCartInfoItemContainer}>
              <p className={classes.pItemPrice}>Model:</p>
              <p className={classes.pItemPrice}>{cartItem.sku}</p>
              </div></div>
              <div hidden={true}>{ subTotal.displayCurrencyValueType = cartItem.displayCurrencyValueType}
                                { subTotal.displayItemAmount = cartItemAmount}
                                { subTotal.displayCurrencyValueSymbol = cartItem.displayCurrencyValueSymbol}
              </div>
          </div>
    ))
    }
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