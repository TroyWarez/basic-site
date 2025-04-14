import { Link } from "react-router-dom";
import classes from "./CartPage.module.css"
import PageContainer from "../../components/PageContainer/PageContainer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import StoreFooter from "../../components/StoreFooter/StoreFooter";
const CartPage = () => {
  return (
    <>
    <title>Shopping Cart</title>
    <PageContainer>
    <NavigationBar cartItemAmount={0}/>
    <div className={classes.cartcontainer}>
      <span className={`${classes.spanLarge} ${classes.span}`}>Your shopping cart is empty</span>
      <span className={classes.span}>Have any wishlist items? Sign in to view them</span>
      <Link className={classes.button } href="/customer/account/login/">Sign in</Link>
      <Link className={`${classes.button} ${classes.buttonColored}`} href="/en/products/">Continue shopping</Link>
    </div>
    </PageContainer>

    <StoreFooter legal_href="/legal/" privacy_href="/legal/privacy/privacy-policy/"/>

    </>
  );
};

export default CartPage;