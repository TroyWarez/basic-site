import classes from "./CartPage.module.css"
import PageContainer from "../../components/PageContainer/PageContainer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
const CartPage = () => {
  return (
    <>
    <title>Shopping Cart</title>
    <PageContainer>
    <div className={classes.container}>
    <NavigationBar cartItemAmount={0}/>
      <span className={`${classes.spanLarge} ${classes.span}`}>Your shopping cart is empty</span>
      <span className={classes.span}>Have any wishlist items? Sign in to view them</span>
      <a className={classes.button } href="/customer/account/login/">Sign in</a>
      <a className={`${classes.button} ${classes.buttonColored}`} href="/en/products/">Continue shopping</a>
    </div>
    <div>
      <a className={classes.footer} href="/legal/">Legal  </a>
      <a className={`${classes.footer} ${classes.privacy}`} href="/legal/privacy/privacy-policy/">  Privacy</a>
    <footer className={classes.footer}>Copyright © {new Date().getFullYear()}, Company Inc. All rights reserved.</footer>
    </div>
    </PageContainer>
    </>
  );
};

export default CartPage;