import axios, { AxiosError } from "axios";
import CartItem from "../models/CartItem"
import Address from "../models/ShippingAddress";
interface CustomError {
  message: string;
  code?: string;
  request?: any;
  response?: AxiosResponse;
  config?: AxiosRequestConfig;
}
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
const httpClient = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {}
  });
  const basePaths = {
    coupons: "api/get/coupons/",
    cart: "api/get/cart/",
    orders: "api/post/orders/",
    users: "api/users/signup",
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
      const cartData: Array<CartItem> = [{ //remove me
        sku: "HPI160100",
        displayItemName: "Red RC Car",
        displayCurrencyValue: 650,
        displayCurrencySaleValue: 550,
        displayCurrencyValueType: "CA",
        displayCurrencyValueSymbol: "$",
        productImageBinData: "/car red.jpg",
        quantityNumber: 3
      },
      {
        sku: "HPI160101",
        displayItemName: "Blue RC Car",
        displayCurrencyValue: 550,
        displayCurrencySaleValue: 450,
        displayCurrencyValueType: "CA",
        displayCurrencyValueSymbol: "$",
        productImageBinData: "/car blue.jpg",
        quantityNumber: 7
      },
      {
        sku: "HPI160102",
        displayItemName: "Green RC Car",
        displayCurrencyValue: 350,
        displayCurrencySaleValue: 250,
        displayCurrencyValueType: "CA",
        displayCurrencyValueSymbol: "$",
        productImageBinData: "/car green.jpg",
        quantityNumber: 4
      }];
      return new Array<CartItem>();
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
    getCartData: async (cartOwner: string): Promise<CartItem[]> => {
        try
        {
          const response =  await httpClient.get(`${basePaths.cart}${cartOwner}`);
          return response.data?.cartData;
        }
        catch (error)
        {
          return [];
        }
      },
    placeOrder: async (orderData: Address) => {
        try
        {
          axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
          const response =  await httpClient.post(`${basePaths.orders}${(orderData.guestOrder) ? 'Guest' : ''}`, {orderData});//Username here
          return response.statusText;
        }
        catch (error)
        {
          window.location.href = `${window.origin}/order-status`
        }
      },
      SignUpUser: async (username: string, password: string): Promise< {status: number, statusText: string }> => {
        try
        {
          axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
          const response =  await httpClient.post(basePaths.users, {username: username, password: password });
          return {status: response.status, statusText: response.statusText };
        }
        catch (error)
        {
            return {status: 500, statusText: "Failed" };
        }
      }
  }

  export default storeApiService;