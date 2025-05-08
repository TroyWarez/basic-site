import { Route, Routes } from "react-router-dom";

import CartPage from "../pages/CartPage/CartPage"
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import GuestLoginPage from "../pages/GuestLoginPage/GuestLoginPage"
import OrderStatusPage from "../pages/OrderStatusPage/OrderStatusPage";
const AppRoutes = () => (
  <Routes>
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/checkout/cart" element={<CartPage />} />
    <Route path="/checkout/cart/guestlogin" element={<GuestLoginPage />} />
    <Route path="/order-status" element={<OrderStatusPage />} />
    <Route path="/" element={<NotFoundPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
