import axios from "axios";
import CartItem from "../models/CartItem"
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
    
    setCartDatalocal:(cartData: Array<CartItem>)  => { 
      localStorage.setItem("cartData", JSON.stringify(cartData));
    },
    getCartDatalocal:():Array<CartItem>  => {
      const cartDataString = localStorage.getItem("cartData");
      if (cartDataString && cartDataString !== '') {
        return JSON.parse(cartDataString);
      }
      return new Array<CartItem>;
      //return cartDataString;
      
    //  try
     // {
     //   const response =  await httpClient.get(`${basePaths.cart}${cartOwner}`);
      //  return response.data?.cartData;
      //}
      //catch (error)
      //{
        //return [];
      //}
      },
  }

  export default storeApiService;