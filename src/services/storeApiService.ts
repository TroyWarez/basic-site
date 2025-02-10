import axios from "axios";
import CouponCode from "../models/CouponCode"
const httpClient = axios.create({
    baseURL: "https://localhost:4000",
  });
  const basePaths = {
    coupons: "/coupons",
  };
  const storeApiService = {
    isCouponValid: async (coupon: string): Promise<CouponCode[]> => {
      const response = await httpClient.get(basePaths.coupons + "/coupons/" + coupon);
      return response.data;
    },
  }

  export default storeApiService;