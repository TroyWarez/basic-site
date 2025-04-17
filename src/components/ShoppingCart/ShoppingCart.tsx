import { Link } from "react-router-dom";
import classes from "./ShoppingCart.module.css"
import storeApiService from "../../services/storeApiService";
import { useState } from "react";
interface ShoppingCartProps {
  className?: string;
  SignInPagePath: string;
  ProductPagePath: string;
}
const ShoppingCart = ({ className, SignInPagePath, ProductPagePath } : ShoppingCartProps) => {
  const cartData = storeApiService.getCartDatalocal();
  const [cartItemQuantity, setCartItemQuantity] = useState('');
  if(cartData?.length === 0) {
    return (
      <div className={(className) ? `${classes.emptycart} ${className}` : classes.emptycart}>
        <span className={`${classes.spanLarge} ${classes.span}`}>Your shopping cart is empty</span>
        <span className={classes.span}>Have any wishlist items? Sign in to view them</span>
        <Link className={classes.button} to={SignInPagePath}>Sign in</Link>
        <Link className={`${classes.button} ${classes.buttonColored}`} to={ProductPagePath}>Continue shopping</Link>
      </div>
    )
  }
  let itemCount = 0;
  cartData.forEach((cartDataItem) => {
    itemCount += cartDataItem.quantityNumber;
  })
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

            <div className={classes.infopanel}>
              <input className={classes.input} title='Quantity'  type="number"
              defaultValue={cartItem.quantityNumber}/>
              <Link to="checkout/cart/">Add to Wishlist</Link>
            </div>
            </div>
            <div className={classes.cartItemPrice}>
              <p className={classes.p}>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${(cartItem.displayCurrencySaleValue * cartItem.quantityNumber)}`}</p>
              <p className={classes.psale}><s>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${(cartItem.displayCurrencyValue * cartItem.quantityNumber)}`}</s></p>
              <button className={classes.button} title='Delete' type='button'><img alt="Delete Icon" src='/deleteIcon.svg'/></button>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className={classes.infopanel}>
        <Link to={ProductPagePath}>Continue shopping</Link>
      </div>
    </div>
  )
}

export default ShoppingCart;