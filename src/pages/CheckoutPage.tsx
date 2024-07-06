import OrderForm from "../components/OrderForm/OrderForm";
import { Link } from "react-router-dom";
const CheckoutPage = () => {
  return (
    <div>
    <Link to="/"><img src={"storefrontIcon.png"} alt="Home" width="64"/></Link>
    <OrderForm/>
    <footer>© Copyright {new Date().getFullYear()} all rights reserved</footer>
    </div>
  );
};

export default CheckoutPage;
