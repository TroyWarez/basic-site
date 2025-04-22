import { Link } from "react-router-dom";
import classes from "./ShoppingCart.module.css"
import storeApiService from "../../services/storeApiService";
import CouponForm from "../CouponForm/CouponForm"
import { useState } from "react";
interface ShoppingCartProps {
  className?: string;
  SignInPagePath: string;
  ProductPagePath: string;
}
const ShoppingCart = ({ className, SignInPagePath, ProductPagePath } : ShoppingCartProps): JSX.Element => {
  let cartDataSaved = null;
  let TotalQuantityNumber = 0;
  let TotalPriceAmount = 0;

  
  let TotalCurrencyType = '';
  let TotalCurrencySymbol = '';
  cartDataSaved = storeApiService.getCartDatalocal();
  cartDataSaved.forEach((cartDataItem) => {
    TotalQuantityNumber += cartDataItem.quantityNumber;
    TotalPriceAmount += (cartDataItem.displayCurrencySaleValue * cartDataItem.quantityNumber);
    TotalCurrencyType = cartDataItem.displayCurrencyValueType;
    TotalCurrencySymbol = cartDataItem.displayCurrencyValueSymbol;
  })
  const [itemCount, setitemCount] = useState(TotalQuantityNumber);
  const [TotalPrice, setTotalPrice] = useState(TotalPriceAmount);
  const [cartData, setCartData] = useState(cartDataSaved);
  const [discount, setDiscount] = useState(0);
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
  const applyDiscountPercentage = (DiscountPercentage: number) => {
    if(DiscountPercentage === 0) {
      return null;
    }
    TotalPriceAmount = 0;
    cartDataSaved.forEach((cartDataItem) => {
      TotalPriceAmount += (cartDataItem.displayCurrencySaleValue * cartDataItem.quantityNumber);
    })
    setDiscount((DiscountPercentage / 100));
  };
  return (
    <div className={(className) ? `${classes.cart} ${className}` : classes.cart}>
      <div className={classes.cartContainer}>
      <p className={classes.pItemCount}>Shopping Cart ({itemCount} {`item${(itemCount > 1) ? 's' : ''}`})</p>
      <div className={classes.cartitems}>
        {cartData.map((cartItem) => (
          <div className={classes.item} key={cartItem.sku}>
            <img className={classes.img} alt="Product Image" src={cartItem.productImage}></img>
            <div className={classes.cartInfo}>
              <p className={classes.p}>{`${cartItem.displayItemName} ${''}`}</p>
              <p>{`Model No: ${cartItem.sku} ${''}`}</p>

            <div className={classes.buttonPanel}>
            <div className={classes.buttonPanelContainer}>
              <div >
              <input className={`${classes.input} ${classes.inputPlusMinus}`} title='Minus' type='button' value={'-'} step="1"
              onClick={(e) => {
                if (cartData[cartData.findIndex((e) => e.sku === cartItem.sku)].quantityNumber > 1)
                {
                  cartData[cartData.findIndex((e) => e.sku === cartItem.sku)].quantityNumber--;
                  if(e.currentTarget?.parentElement)
                    {
                      (e.currentTarget.parentElement.children[1] as HTMLInputElement).value = cartData[cartData.findIndex((e) => e.sku === cartItem.sku)].quantityNumber.toString();
                    }
                  TotalQuantityNumber = 0;
                  TotalPriceAmount = 0;
                  cartData.forEach((cartDataItem) => {
                    (cartDataItem.quantityNumber === 0) ? TotalQuantityNumber += 1 : TotalQuantityNumber += cartDataItem.quantityNumber;
                    (cartDataItem.quantityNumber === 0) ? TotalPriceAmount += (cartDataItem.displayCurrencySaleValue * 1) : TotalPriceAmount += (cartDataItem.displayCurrencySaleValue * cartDataItem.quantityNumber);
                  })
                    setitemCount(TotalQuantityNumber);
                    setTotalPrice(TotalPriceAmount);
                    storeApiService.setCartDatalocal(cartData);
                    setCartData(cartData);
                }
              }}/>
              <input className={classes.input} title='Quantity'  type="tel" minLength={1} maxLength={99}
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
                setCartData(storeApiService.getCartDatalocal());
                cartData[cartData.findIndex((e) => e.sku === cartItem.sku)].quantityNumber = e.currentTarget.valueAsNumber;
                TotalQuantityNumber = 0;
                TotalPriceAmount = 0;
                cartData.forEach((cartDataItem) => {
                  (cartDataItem.quantityNumber === 0) ? TotalQuantityNumber += 1 : TotalQuantityNumber += cartDataItem.quantityNumber;
                  (cartDataItem.quantityNumber === 0) ? TotalPriceAmount += (cartDataItem.displayCurrencySaleValue * 1) : TotalPriceAmount += (cartDataItem.displayCurrencySaleValue * cartDataItem.quantityNumber);
                })
                  setitemCount(TotalQuantityNumber);
                  setTotalPrice(TotalPriceAmount);
                  storeApiService.setCartDatalocal(cartData);
                  setCartData(storeApiService.getCartDatalocal());
              }}/>
              <input className={`${classes.input} ${classes.inputPlusMinus}`} title='Plus' type='button' value={'+'} step="1"
              onClick={(e) => {
                if (cartData[cartData.findIndex((e) => e.sku === cartItem.sku)].quantityNumber <= 99)
                  {
                    cartData[cartData.findIndex((e) => e.sku === cartItem.sku)].quantityNumber++;
                    if(e.currentTarget?.parentElement)
                    {
                      (e.currentTarget.parentElement.children[1] as HTMLInputElement).value = cartData[cartData.findIndex((e) => e.sku === cartItem.sku)].quantityNumber.toString();
                    }

                    TotalQuantityNumber = 0;
                    TotalPriceAmount = 0;
                    cartData.forEach((cartDataItem) => {
                      (cartDataItem.quantityNumber === 0) ? TotalQuantityNumber += 1 : TotalQuantityNumber += cartDataItem.quantityNumber;
                      (cartDataItem.quantityNumber === 0) ? TotalPriceAmount += (cartDataItem.displayCurrencySaleValue * 1) : TotalPriceAmount += (cartDataItem.displayCurrencySaleValue * cartDataItem.quantityNumber);
                    })
                      setitemCount(TotalQuantityNumber);
                      setTotalPrice(TotalPriceAmount);
                      storeApiService.setCartDatalocal(cartData);
                      setCartData(cartData);
                  }
              }}/>
              </div>
              <Link className={`${classes.AltText} ${classes.AltWishListText}`} to="checkout/cart/">{` Add to Wishlist `}</Link>
              </div>
              <button className={classes.CheckoutButton} title='Delete' type='button' onClick={() => {
              setCartData(cartData.filter((cartDataItem) => cartDataItem.sku !== cartItem.sku));
              const updatedCartData = cartData.filter((cartDataItem) => cartDataItem.sku !== cartItem.sku);
                   TotalQuantityNumber = 0;
                   TotalPriceAmount = 0;
                   updatedCartData.forEach((cartDataItem) => {
                  (cartDataItem.quantityNumber === 0) ? TotalQuantityNumber += 1 : TotalQuantityNumber += cartDataItem.quantityNumber;
                 (cartDataItem.quantityNumber === 0) ? TotalPriceAmount += (cartDataItem.displayCurrencySaleValue * 1) : TotalPriceAmount += (cartDataItem.displayCurrencySaleValue * cartDataItem.quantityNumber);
                })
                setitemCount(TotalQuantityNumber);
                setTotalPrice(TotalPriceAmount);
                storeApiService.setCartDatalocal(updatedCartData);
              }}><img alt="Delete Icon" src='/deleteIcon.svg'/></button>
            </div>
            </div>
            <div className={classes.cartItemPrice}>
              <p className={classes.p}>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${(cartItem.quantityNumber === 0) ? (cartItem.displayCurrencySaleValue * 1) : (cartItem.displayCurrencySaleValue * cartItem.quantityNumber)}`}</p>
              <p className={classes.psale} hidden={(cartItem.displayCurrencyValue === 0) ? true : false}><s>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${(cartItem.quantityNumber === 0) ? (cartItem.displayCurrencyValue * 1) : (cartItem.displayCurrencyValue * cartItem.quantityNumber)}`}</s></p>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div>
      <Link className={classes.AltText} to={ProductPagePath}>Continue shopping</Link>
      <div className={classes.infopanel}>
        <p>Congratulations! You've qualified for FREE shipping!</p>
        <div className={classes.bluebar}>
          
        </div>

        <div>
          <CouponForm applyCouponDiscount={applyDiscountPercentage}></CouponForm>
        </div>
        <p className={classes.p}>Order summary</p>

        <div className={classes.PriceTotal}>
          <p>{`Subtotal (${itemCount} ${(itemCount > 1) ? 'Items' : 'Item'})`}</p>
          <p>{`${TotalCurrencyType}${TotalCurrencySymbol}${TotalPrice}`}</p>
        </div>
        <div className={classes.PriceTotal}>
          <p>Shipping</p>
          <p>{`${TotalCurrencyType}${TotalCurrencySymbol}0.00`}</p>
        </div>
        <div className={classes.PriceTotal} hidden={(discount) ? false : true}>
          <p>Discount</p>
          <p><b>{`${TotalCurrencyType}${TotalCurrencySymbol}${(TotalPrice * discount)}`}</b></p>
        </div>
        <div className={`${classes.p} ${classes.PriceTotal} ${classes.OrderTotal}`}>
          <p className={classes.p}>Order Total</p>
          <div>
          <p className={classes.p}>{`${TotalCurrencyType}${TotalCurrencySymbol}${(discount) ? TotalPrice - (TotalPrice * discount) : TotalPrice}`}</p>
          <p className={classes.psale} hidden={(discount) ? false : true}><s>{`${TotalCurrencyType}${TotalCurrencySymbol}${TotalPrice}`}</s></p>
          </div>
        </div>
        <Link className={`${classes.buttonSignIn} ${classes.CheckoutButtonSignIn}`} to={'guestlogin/'}>Continue to checkout</Link>
        <p className={classes.p}>Checkout with us</p>
        <p>By clicking "Continue to Checkout", you will be redirected to the checkout page, where your payment will be processed, the store's designated online reseller and merchant of record for the online store sales at
         <Link className={classes.AltText} to={window.origin}>{` ${window.origin}.`}</Link>This will allow your order to be processed for fulfillment.</p>
      </div>
      </div>
    </div>
  )
}

export default ShoppingCart;