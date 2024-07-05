import { Route, Routes } from "react-router-dom";

import CheckoutPage from "../pages/CheckoutPage"
import NotFoundPage from "../pages/NotFoundPage"

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<CheckoutPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
