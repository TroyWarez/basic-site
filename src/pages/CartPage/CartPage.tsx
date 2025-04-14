import classes from "./CartPage.module.css"
import PageContainer from "../../components/PageContainer/PageContainer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import StoreFooter from "../../components/StoreFooter/StoreFooter";
const CartPage = () => {
  return (
    <>
    <title>Shopping Cart</title>
    <PageContainer>
    <div className={classes.container}>
    <div className={classes.navbar}>
    <NavigationBar cartItemAmount={0}/>
    </div>
      <span className={`${classes.spanLarge} ${classes.span}`}>Your shopping cart is empty</span>
      <span className={classes.span}>Have any wishlist items? Sign in to view them</span>
      <a className={classes.button } href="/customer/account/login/">Sign in</a>
      <a className={`${classes.button} ${classes.buttonColored}`} href="/en/products/">Continue shopping</a>
    </div>
    </PageContainer>
    <div>
    </div>
    
    <StoreFooter legal_href="/legal/" privacy_href="/legal/privacy/privacy-policy/"/>

    </>
  );
};

export default CartPage;