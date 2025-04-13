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
      <a className={classes.button } href="/customer/account/login/">Sign in</a>
      <a className={`${classes.button} ${classes.buttonColored}`} href="/en/products/">Continue shopping</a>
    </PageContainer>
    <footer className={classes.footer}>Copyright © {new Date().getFullYear()}, Company Inc. All rights reserved.</footer>
    </>
  );
};

export default CartPage;