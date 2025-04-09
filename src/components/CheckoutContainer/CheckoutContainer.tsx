import classes from './CheckoutContainer.module.css'
import CheckoutCart from '../CheckoutCart/CheckoutCart'
import OrderForm from '../OrderForm/OrderForm';
import NavigationBar from "../../components/NavigationBar/NavigationBar"
import storeApiService from "../../services/storeApiService";
import CartItem from "../../models/CartItem"
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
const CheckoutContainer = () : JSX.Element => {
  const [Checkoutcontainer, setCheckoutcontainer] = useState(<>
                  <title>Loading...</title></>);
  const[loadingFlag, setloadingFlag] = useState(false);
  const[cartItems, setCartitems] = useState<CartItem[]>([]);
  useEffect(() => { 
    let itemCount = 0;
    let cartTotalCost = 0;
    if(loadingFlag == false) {
    const cartItemsdb = storeApiService.getCartData('Debug');
    cartItemsdb.then((cartItemsFound) => {
      if(cartItems.length === 0){
        cartItemsFound.forEach((cartItem) => {
          const JpgBinCharData = atob(cartItem.productImageBinData);
          const JpgByteNumbers = new Array(JpgBinCharData.length);
          for (let i = 0; i < JpgByteNumbers.length; i++) {
            JpgByteNumbers[i] = JpgBinCharData.charCodeAt(i);
          }
          const JpgByteArray = new Uint8Array(JpgByteNumbers);

          const JpgBlob = new Blob([JpgByteArray], {type: 'contentType'});
          const JpgUrl = URL.createObjectURL(JpgBlob);
          cartItem.productImageBinData = JpgUrl;
          itemCount += cartItem.quantityNumber;
          cartTotalCost += (cartItem.displayCurrencyValue * cartItem.quantityNumber);
        })
        setloadingFlag(true);
        if(itemCount > 0)
        {
          setCheckoutcontainer(
            <>
            <title>Store Checkout</title>
            <NavigationBar cartItemAmount={itemCount} />
              <div className={classes.CheckoutContainer}>
                  <OrderForm/>
                  <CheckoutCart cartItemAmount={itemCount} cartItems={cartItemsFound} cartTotal={cartTotalCost}/>
              </div>
              </>
              );
        }
        else
        {
          setCheckoutcontainer(
            <>
                <title>Failed to load the checkout</title>
                  <h1>Failed to load the checkout</h1>
                  <p>Cannot connect to the cart server.</p>
                <button><Link to="/cart">Go back to the cart page</Link></button>
            </>
              );
        }
      }
    })
    }
  }, [cartItems, loadingFlag]);
  return (
    Checkoutcontainer
  )
}
export default CheckoutContainer;