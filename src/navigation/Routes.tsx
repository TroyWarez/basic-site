import { Route, Routes } from "react-router-dom";

import CartPage from "../pages/CartPage/CartPage"
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

const AppRoutes = () => (
  <Routes>
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/checkout/cart" element={<CartPage />} />
    <Route path="/" element={<NotFoundPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
