import classes from "./CartPage.module.css"
import PageContainer from "../../components/PageContainer/PageContainer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
const CartPage = () => {
  return (
    <>
    <title>Shopping Cart</title>
    <NavigationBar cartItemAmount={0}/>
    <PageContainer>
      <span className={classes.spanLarge}>Your shopping cart is empty</span>
      <span className={classes.span}>Have any wishlist items? Sign in to view them</span>
    </PageContainer>
    </>
  );
};

export default CartPage;
