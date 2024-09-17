import OrderForm from "../../components/OrderForm/OrderForm";
import Homebutton from "../../components/Homebutton/Homebutton";
import Footer from "../../components/CheckoutFooter/CheckoutFooter";
const CheckoutPage = () => {
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
