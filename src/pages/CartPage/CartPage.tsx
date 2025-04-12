import PageContainer from "../../components/PageContainer/PageContainer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
const CartPage = () => {
  return (
    <>
    <NavigationBar cartItemAmount={0}/>
    <PageContainer title="Test">
      <p>Page</p>      
    </PageContainer>
    </>
  );
};

export default CartPage;
