import OrderForm from "../components/OrderForm/OrderForm";
const CheckoutPage = () => {
  return (
    <div>
    <OrderForm/>
    <footer>Copyright {new Date().getFullYear()}</footer>
    </div>
  );
};

export default CheckoutPage;
