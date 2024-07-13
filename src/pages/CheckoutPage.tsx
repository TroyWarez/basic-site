import OrderForm from "../components/OrderForm/OrderForm";
import Homebutton from "../components/Homebutton/Homebutton";
import PaymentForm from "../components/PaymentForm";
const CheckoutPage = () => {
  return (
    <div>
    <title>Store Checkout</title>
    <Homebutton/>
    <OrderForm/>
    <PaymentForm/>
    <footer>© Copyright {new Date().getFullYear()} all rights reserved</footer>
    </div>
  );
};

export default CheckoutPage;
