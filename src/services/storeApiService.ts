import axios from "axios";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const httpClient = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {}
  });
  const basePaths = {
    coupons: "coupons/",
    cart: "cart/",
  };
  const storeApiService = {
    getDiscountPercentage: async (coupon: string): Promise<number> => {
    try
    {
      const response = await httpClient.get(`${basePaths.coupons}${coupon}`);
      return response.data?.discountPercentage;
    }
    catch (error)
    {
      return 0;
    }
    },

    getCartData: async (): Promise<number> => {
      try
      {
        const response = await httpClient.get(basePaths.cart);
        return response.data;
      }
      catch (error)
      {
        return 0;
      }
      },
  }

  export default storeApiService;