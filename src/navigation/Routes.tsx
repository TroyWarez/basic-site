import { Route, Routes } from "react-router-dom";

import CheckoutPage from "../pages/CheckoutPage/CheckoutPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<CheckoutPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
