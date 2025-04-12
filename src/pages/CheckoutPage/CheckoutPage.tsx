import PageContainer from '../../components/PageContainer/PageContainer';
import CheckoutCart from '../../components/CheckoutCart/CheckoutCart'
import OrderForm from '../../components/OrderForm/OrderForm';
import NavigationBar from "../../components/NavigationBar/NavigationBar"
import storeApiService from "../../services/storeApiService";
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
const CheckoutPage = () : JSX.Element => {
  const [CheckoutPage, setCheckoutPage] = useState(<title>Loading...</title>);
  useEffect(() => { 
    let itemCount = 0;
    let cartTotalCost = 0;
    const cartItemsdb = storeApiService.getCartData('Debug');
    cartItemsdb.then((cartItemsFound) => {
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
        if(itemCount > 0)
        {
          setCheckoutPage(
            <>
            <title>Store Checkout</title>
            <NavigationBar cartItemAmount={itemCount} />
              <PageContainer>
                  <OrderForm/>
                  <CheckoutCart cartItemAmount={itemCount} cartItems={cartItemsFound} cartTotal={cartTotalCost}/>
              </PageContainer>
              </>
              );
        }
        else
        {
          setCheckoutPage(
            <>
                <title>Failed to load the checkout</title>
                  <h1>Failed to load the checkout</h1>
                  <p>Cannot connect to the cart server.</p>
                <button><Link to="/checkout/cart">Go back to the cart page</Link></button>
            </>
              );
        }
    })
    
  });
  return ( CheckoutPage )
}
export default CheckoutPage;