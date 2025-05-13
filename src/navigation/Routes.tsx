import { Route, Routes } from "react-router-dom";

import CartPage from "../pages/CartPage/CartPage"
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import GuestLoginPage from "../pages/GuestLoginPage/GuestLoginPage"
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import OrderStatusPage from "../pages/OrderStatusPage/OrderStatusPage";
import PlaceholderPage from "../pages/PlaceholderPage/PlaceholderPage";
const AppRoutes = () => (
  <Routes>
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/checkout/cart" element={<CartPage />} />
    <Route path="/checkout/cart/guestlogin" element={<GuestLoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/legal/privacy/privacy-policy" element={<PlaceholderPage HeadingText="Privacy Policy"/>} />
    <Route path="/terms-and-conditions" element={<PlaceholderPage HeadingText="Terms and Conditions"/>} />
    <Route path="/legal" element={<PlaceholderPage HeadingText="Legal"/>} />
    <Route path="/order-status" element={<OrderStatusPage />} />
    <Route path="/" element={<NotFoundPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
