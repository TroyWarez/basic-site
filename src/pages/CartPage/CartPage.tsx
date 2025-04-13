import classes from "./CartPage.module.css"
import PageContainer from "../../components/PageContainer/PageContainer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import TextSpan from "../../components/TextSpan/TextSpan";
const CartPage = () => {
  return (
    <>
    <title>Shopping Cart</title>
    <NavigationBar cartItemAmount={0}/>
    <PageContainer>
    <TextSpan className={classes.spanLarge}>Your shopping cart is empty</TextSpan>
    <TextSpan className={classes.span}>Have any wishlist items? Sign in to view them</TextSpan>
    </PageContainer>
    </>
  );
};

export default CartPage;
