import classes from "../CheckoutCart/CheckoutCart.module.css"
import ButtonClasses from "../ShoppingCart/ShoppingCart.module.css"
import ids from "../CheckoutCart/CheckoutCart.module.css"
import { Link, useLocation } from "react-router-dom";
import storeApiService from "../../services/storeApiService";
interface CartProps {
  className?: string;
}
const CheckoutCart = ({ className}: CartProps) : JSX.Element => {
  const cartItems = storeApiService.getCartDatalocal();
  const location = useLocation();
  let percent = 0;
  let Discount_code = '';
  if(location.state)
  {
    Discount_code = location.state['discount_code'];
    percent = location.state['discount_percent'];
  }
  let cartTotal = 0;
  let cartItemAmount = 0;
  cartItems.forEach((cartItem) => {
    cartTotal += (cartItem.displayCurrencyValue * cartItem.quantityNumber);
    cartItemAmount += cartItem.quantityNumber;
  });
  if(cartItemAmount > 0)
  {
    return(
    <div className={classes.CheckoutCartContainer}>
    <div className={classes.CheckoutCartTitle}>
      <h2 className={classes.p}>Cart Overview</h2>
    </div>
    <Link className={`${ButtonClasses.buttonSignIn} ${classes.button}`} to={'/checkout/cart'}>{'< Back To Cart'}</Link>
    {
    cartItems.map((cartItem, index) => (
          <div className={`${(className) ? className : ''}`} key={cartItem.sku}>
            <div className={`${classes.CheckoutCartInfoContainer} ${(index === cartItems.length - 1) ? classes.noborder : ''}`}>
              <img className={classes.img}src={`/${cartItem.productImageBinData}`} alt='ProductImage'/>
                  <div className={classes.CheckoutCartInfoItem}>
                    <b><p className={classes.p} id={ids.pItemName}>{cartItem.displayItemName}</p></b>
                      <div className={classes.CheckoutCartInfoItemContainer}>
                      <p className={classes.pItemPrice}>Quantity:</p>
                      <p className={classes.pItemPrice}>{cartItem.quantityNumber}</p>
                      </div>
                    <div className={classes.CheckoutCartInfoItemContainer}>
                      <p className={classes.pItemPrice}>Model:</p>
                      <p className={classes.pItemPrice}>{cartItem.sku}</p>
                    </div>
                      <div className={classes.CheckoutCartInfoItemContainer}>
                      <p className={classes.pItemPrice}>Price:</p>
                    <div className={classes.CheckoutCartInfoItemPrice}>
                      <p className={classes.pItemPrice}>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${cartItem.displayCurrencyValue}` }</p>
                      <s hidden={(cartItem.displayCurrencySaleValue === null) ? true : false} className={classes.pItemPriceRed}><p>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${cartItem.displayCurrencySaleValue}` }</p></s>
                    </div>
                  </div>
                </div>
                </div>
          </div>
    ))
    }
    <div className={classes.border}>
        <div className={classes.CheckoutCartSubtotal}>
              <p id={ids.pLight}>
              {`${cartItemAmount} item${(cartItemAmount > 1) ? 's' : ''}`}
              </p>
              <p>{`${cartItems[0].displayCurrencyValueType}${cartItems[0].displayCurrencyValueSymbol}${cartTotal.toFixed(2)}`}</p>
        </div>
        <div className={classes.CheckoutCartSubtotal}>
              <p className={classes.pShippingTotal}>Delivery</p>
              <p className={classes.pShippingTotal}>Free</p>
        </div>
        <div className={classes.CheckoutCartSubtotal}>
          <p className={classes.p}>Import Fees</p>
          <p className={classes.p} id={classes.pCurrency}>{`${cartItems[0].displayCurrencyValueType}`}
          {`${cartItems[0].displayCurrencyValueSymbol}${(cartTotal * 0.05).toFixed(2) }`}</p>
        </div>
        <div className={classes.CheckoutCartSubtotalPromo}>
          {(Discount_code) ?  <><p className={classes.p}>️✅ Promotion applied</p><br/><b>{Discount_code}</b> <p>{`${cartItems[0].displayCurrencyValueType}${cartItems[0].displayCurrencyValueSymbol}${(percent * cartTotal).toFixed(2)}`}</p></>  : <></>}
        </div>
      </div>
      <div className={classes.CheckoutCartSubtotal}>
              <p className={classes.pTotal}>Total:</p>
              <p className={classes.pTotal}>{`${cartItems[0].displayCurrencyValueType}${cartItems[0].displayCurrencyValueSymbol}${((cartTotal + (cartTotal * 0.05)) - (cartTotal * ((percent) ? percent : 0))).toFixed(2)}`}</p>
        </div>
    </div>
    );
  }
  return (<div className={classes.CheckoutCartContainer}>
    <div className={classes.CheckoutCartInfoContainer}>
      <p className={classes.pItemPriceRed}>Failed to load the cart information...</p>
      </div>
    </div>);
}
export default CheckoutCart