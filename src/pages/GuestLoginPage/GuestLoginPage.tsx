import NavigationBar from "../../components/NavigationBar/NavigationBar"
import StoreFooter from "../../components/StoreFooter/StoreFooter"
import GuestLogin from "../../components/GuestLogin/GuestLogin"
const GuestLoginPage = () => {
  return (
    <>
    <title>Guest Login</title>
    <NavigationBar cartItemAmount={0} />
    <GuestLogin/>
    <StoreFooter legal_href="/legal/" privacy_href="/legal/privacy/privacy-policy/"/>
    </>
  )
}

export default GuestLoginPage