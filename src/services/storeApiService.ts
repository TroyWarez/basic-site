import axios from "axios";
import CouponCode from "../models/CouponCode"
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const httpClient = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {}
  });
  const basePaths = {
    coupons: "coupons/",
  };
  const storeApiService = {
    getDiscountPercentage: async (coupon: string): Promise<number> => {
    try
    {
      const response = await httpClient.get(basePaths.coupons + coupon);
      return response.data?.discountPercentage;
    }
    catch (error)
    {
      return 0;
    }
    },
  }

  export default storeApiService;