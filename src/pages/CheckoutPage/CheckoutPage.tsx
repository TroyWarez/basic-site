import Imgbutton from "../../components/ImgButton/ImgButton";
import CheckoutContainer from "../../components/CheckoutContainer/CheckoutContainer";
import Footer from "../../components/CheckoutFooter/CheckoutFooter";
const CheckoutPage = () => {
  return (
    <div>
    <title>Store Checkout</title>
    <Imgbutton imgPath={"storefrontIcon.png"} name={"Store"} altText={"Home"} linkPath="/"/>
    <CheckoutContainer/>
    </div>
  );
};

export default CheckoutPage;
