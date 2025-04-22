import NavigationBar from "../../components/NavigationBar/NavigationBar"
import StoreFooter from "../../components/StoreFooter/StoreFooter"
const GuestLoginPage = () => {
  return (
    <>
    <title>Guest Login</title>
    <NavigationBar cartItemAmount={0} />
    <div>GuestLoginPage</div>
    <StoreFooter legal_href="/legal/" privacy_href="/legal/privacy/privacy-policy/"/>
    </>
  )
}

export default GuestLoginPage