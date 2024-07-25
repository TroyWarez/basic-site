import OrderForm from "../components/OrderForm/OrderForm";
import Homebutton from "../components/Homebutton/Homebutton";
const CheckoutPage = () => {
  return (
    <div>
    <title>Store Checkout</title>
    <Homebutton/>
    <OrderForm/>
    <footer>© Copyright {new Date().getFullYear()} all rights reserved</footer>
    </div>
  );
};

export default CheckoutPage;
