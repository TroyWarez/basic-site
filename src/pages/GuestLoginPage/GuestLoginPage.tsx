import NavigationBar from "../../components/NavigationBar/NavigationBar"
import StoreFooter from "../../components/StoreFooter/StoreFooter"
import GuestLogin from "../../components/GuestLogin/GuestLogin"
import PageContainer from "../../components/PageContainer/PageContainer"
const GuestLoginPage = () => {
  return (
    <>
    <title>Guest Login</title>
    <PageContainer>
    <NavigationBar cartItemAmount={0} />
    <GuestLogin/>
    </PageContainer>
    <StoreFooter legal_href="/legal/" privacy_href="/legal/privacy/privacy-policy/"/>
    </>
  )
}

export default GuestLoginPage