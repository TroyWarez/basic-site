import NavigationBar from "../../components/NavigationBar/NavigationBar"
import CheckoutContainer from "../../components/CheckoutContainer/CheckoutContainer"
import { useState } from "react"
const CheckoutPage = () => {
  const [cartItemAmount, setCartItemAmount] = useState('0')
  return (
    <div>
    <title>Store Checkout</title>
    <NavigationBar cartItemAmount={cartItemAmount.toString()}/>
    <CheckoutContainer setCartItemAmount={setCartItemAmount} cartItemAmount={cartItemAmount.toString()}/>
    </div>
  );
};

export default CheckoutPage;
