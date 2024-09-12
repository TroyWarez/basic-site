import OrderForm from "../../components/OrderForm/OrderForm";
import Homebutton from "../../components/Homebutton/Homebutton";
import Footer from "../../components/Footer/Footer";
const CheckoutPage = () : JSX.Element => {
  return (
    <div>
    <title>Store Checkout</title>
    <Homebutton/>
    <OrderForm/>
    <Footer/>
    </div>
  );
};

export default CheckoutPage;
