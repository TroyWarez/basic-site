import { Link } from "react-router-dom";
import classes from "./ShoppingCart.module.css"
import storeApiService from "../../services/storeApiService";
interface ShoppingCartProps {
  className?: string;
  SignInPagePath: string;
  ProductPagePath: string;
}
const ShoppingCart = ({ className, SignInPagePath, ProductPagePath } : ShoppingCartProps) => {
  const cartData = storeApiService.getCartDatalocal();
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
    itemCount += cartDataItem.quantityNumber

  })
  return (
    <div className={(className) ? `${classes.cart} ${className}` : classes.cart}>
      <div className={classes.cartitems}>
      <p className={`${classes.p} ${classes.pItemCount}`}>Shopping Cart ({itemCount} items)</p>
        {cartData.map((cartItem) => (
          <div className={classes.item}>
            <img className={classes.img} alt="Product Image" src={cartItem.productImageBinData}></img>
            <div className={classes.cartInfo}>
              <p className={classes.p}>{`${cartItem.displayItemName} ${''}`}</p>
              <p>{`Model No: ${cartItem.sku} ${''}`}</p>

            <div className={classes.infopanel}>
              <p>{`Quantity ${cartItem.quantityNumber}`}</p>
              <Link to="checkout/cart/">Add to Wishlist</Link>
            </div>
            </div>
            <div>
              <p className={classes.p}>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${cartItem.displayCurrencyValue}`}</p>
              <p className={classes.psale}><s>{`${cartItem.displayCurrencyValueType}${cartItem.displayCurrencyValueSymbol}${cartItem.displayCurrencySaleValue}`}</s></p>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.infopanel}>
        <Link to={ProductPagePath}>Continue shopping</Link>
      </div>
    </div>
  )
}

export default ShoppingCart;