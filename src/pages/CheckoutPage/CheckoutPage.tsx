import PageContainer from '../../components/PageContainer/PageContainer';
import NavigationBar from "../../components/NavigationBar/NavigationBar"
import StoreFooter from '../../components/StoreFooter/StoreFooter';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
const CheckoutPage = () => {
  return (         <>
    <title>Store - Checkout</title>
    <NavigationBar cartItemAmount={0} isCentered={true}/>
      <PageContainer>
        <CheckoutForm/>
      </PageContainer>
      <StoreFooter legal_href="/legal/" privacy_href="/legal/privacy/privacy-policy/"/>
      </> )
}
export default CheckoutPage;