import PageContainer from '../../components/PageContainer/PageContainer';
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import OrderDisplay from '../../components/OrderDisplay/OrderDisplay';
import StoreFooter from '../../components/StoreFooter/StoreFooter';
const OrderStatusPage = () : JSX.Element => {
  return (         <>
    <title>Order Confirmed</title>
    <NavigationBar cartItemAmount={0} isCentered={true}/>
      <PageContainer>
        <OrderDisplay/>
      </PageContainer>
      <StoreFooter legal_href="/legal/" privacy_href="/legal/privacy/privacy-policy/"/>
      </> )
}
export default OrderStatusPage;