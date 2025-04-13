import classes from "./CartPage.module.css"
import PageContainer from "../../components/PageContainer/PageContainer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
const CartPage = () => {
  return (
    <>
    <title>Shopping Cart</title>
    <NavigationBar cartItemAmount={0}/>
    <PageContainer>
      <span className={`${classes.spanLarge} ${classes.span}`}>Your shopping cart is empty</span>
      <span className={classes.span}>Have any wishlist items? Sign in to view them</span>
      <button className={classes.button}>Sign in</button>
      <button className={`${classes.button} ${classes.buttonColored}`}>Continue Shopping</button>
    </PageContainer>
    </>
  );
};

export default CartPage;