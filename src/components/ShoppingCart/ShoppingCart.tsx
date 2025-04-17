import { Link } from "react-router-dom";
import classes from "./ShoppingCart.module.css"
import storeApiService from "../../services/storeApiService";
import { useState } from "react";
interface ShoppingCartProps {
  className?: string;
  SignInPagePath: string;
  ProductPagePath: string;
}
const ShoppingCart = ({ className, SignInPagePath, ProductPagePath } : ShoppingCartProps): JSX.Element => {
  let cartData = storeApiService.getCartDatalocal();
  let TotalQuantityNumber = 0;
  let TotalPriceAmount = 0;

  let TotalCurrencyType = '';
  let TotalCurrencySymbol = '';
  cartData.forEach((cartDataItem) => {
    TotalQuantityNumber += cartDataItem.quantityNumber;
    TotalPriceAmount += (cartDataItem.displayCurrencySaleValue * cartDataItem.quantityNumber);
    TotalCurrencyType = cartDataItem.displayCurrencyValueType;
    TotalCurrencySymbol = cartDataItem.displayCurrencyValueSymbol;
  })
  const [itemCount, setitemCount] = useState(TotalQuantityNumber);
  const [TotalPrice, setTotalPrice] = useState(TotalPriceAmount);
  if(cartData?.length === 0) {
    return (
      <div className={(className) ? `${classes.emptycart} ${className}` : classes.emptycart}>
        <span className={`${classes.spanLarge} ${classes.span}`}>Your shopping cart is empty</span>
        <span className={classes.span}>Have any wishlist items? Sign in to view them</span>
        <Link className={classes.buttonSignIn} to={SignInPagePath}>Sign in</Link>
        <Link className={`${classes.buttonSignIn} ${classes.buttonColored}`} to={ProductPagePath}>Continue shopping</Link>
      </div>
    )
  }
  return (
    <div className={(className) ? `${classes.cart} ${className}` : classes.cart}>
      <div>
      <p className={`${classes.p} ${classes.pItemCount}`}>Shopping Cart ({itemCount} items)</p>
      <div className={classes.cartitems}>
        {cartData.map((cartItem) => (
          <div className={classes.item} key={cartItem.sku}>
            <img className={classes.img} alt="Product Image" src={cartItem.productImage}></img>
            <div className={classes.cartInfo}>
              <p className={classes.p}>{`${cartItem.displayItemName} ${''}`}</p>
              <p>{`Model No: ${cartItem.sku} ${''}`}</p>

            <div className={classes.cartItem}>
              <input className={classes.input} title='Quantity'  type="number" minLength={1} maxLength={99}
              defaultValue={cartItem.quantityNumber}
              onChange={(e) => {
                if (e.currentTarget.valueAsNumber === 0)
                  {
                    e.currentTarget.value = '1';
                  }
                  if (e.currentTarget.valueAsNumber >= 99)
                    {
                      e.currentTarget.value = '99';
                    }
                cartData = storeApiService.getCartDatalocal();
                cartData[cartData.findIndex((e) => e.sku === cartItem.sku)].quantityNumber = Number(e.currentTarget.value);
                TotalQuantityNumber = 0;
                TotalPriceAmount = 0;
                cartData.forEach((cartDataItem) => {
                  TotalQuantityNumber += cartDataItem.quantityNumber;
                  TotalPriceAmount += (cartDataItem.displayCurrencySaleValue * cartDataItem.quantityNumber);
                })
                  setitemCount(TotalQuantityNumber);
                  setTotalPrice(TotalPriceAmount);
                  if (e.currentTarget.value !== '')
                    {
                      storeApiService.setCartDatalocal(cartData);
                    }
              }}/>
              <Link className={classes.AltText} to="checkout/cart/">Add to Wishlist</Link>
            </div>
            </div>
            <div className={classes.cartItemPrice}>
              <p className={classes.p}>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${(cartItem.quantityNumber <= 0) ? (cartItem.displayCurrencySaleValue * 1) : (cartItem.displayCurrencySaleValue * cartItem.quantityNumber)}`}</p>
              <p className={classes.psale}><s>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${(cartItem.quantityNumber <= 0) ? (cartItem.displayCurrencyValue * 1) : (cartItem.displayCurrencyValue * cartItem.quantityNumber)}`}</s></p>
              <button className={classes.CheckoutButton} title='Delete' type='button'><img alt="Delete Icon" src='/deleteIcon.svg'/></button>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div>
      <Link className={classes.AltText} to={ProductPagePath}>Continue shopping</Link>
      <div className={classes.infopanel}>
        <p>Congratulations! You've qualified for FREE shipping!</p>
        <p className={classes.p}>Order summary</p>
        <div className={classes.Subtotal}>
        <p>{`Subtotal (${itemCount} ${(itemCount > 1) ? 'Items' : 'Item'})`}</p>
        <p>{`${TotalCurrencyType}${TotalCurrencySymbol}${TotalPrice}`}</p>
        </div>
        <Link className={`${classes.buttonSignIn} ${classes.CheckoutButtonSignIn}`} to={'guestlogin/'}>Continue to checkout</Link>
        <p className={classes.p}>Checkout with us</p>
        <p>By clicking "Continue to Checkout", you will be redirected to the checkout page, where your payment will be processed, the store's designated online reseller and merchant of record for the online store sales at</p>
         <Link className={classes.AltText} to={window.origin}>{window.origin}</Link>
         <p>This will allow your order to be processed for fulfillment.</p>
      </div>
      </div>
    </div>
  )
}

export default ShoppingCart;