import PageContainer from "../../components/PageContainer/PageContainer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import TextSpan from "../../components/TextSpan/TextSpan";
const CartPage = () => {
  return (
    <>
    <title>Shopping Cart</title>
    <NavigationBar cartItemAmount={0}/>
    <PageContainer>
    <TextSpan>Your shopping cart is empty</TextSpan>      
    </PageContainer>
    </>
  );
};

export default CartPage;
