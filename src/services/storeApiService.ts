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
    isCouponValid: async (coupon: string): Promise<CouponCode[]> => {
    try
    {
      const response = await httpClient.get(basePaths.coupons + coupon);
      return response.data;
    }
    catch (error)
    {
      console.error(error);
    }
    return new Array(0);
    },
  }

  export default storeApiService;