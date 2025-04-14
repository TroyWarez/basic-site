import PageContainer from "../../components/PageContainer/PageContainer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import StoreFooter from "../../components/StoreFooter/StoreFooter";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

const CartPage = () => {
  return (
    <>
    <title>Shopping Cart</title>
    <PageContainer>
      <NavigationBar cartItemAmount={0}/>
        <ShoppingCart/>
    </PageContainer>
    <StoreFooter legal_href="/legal/" privacy_href="/legal/privacy/privacy-policy/"/>

    </>
  );
};

export default CartPage;