import axios, { AxiosError } from "axios";
import CartItem from "../models/CartItem"
import ProductItem from "../models/ProductItem";
import Address from "../models/ShippingAddress";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
const httpClient = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {}
  });
  const basePaths = {
    coupons: "api/get/coupons/",
    cart: "api/get/cart/",
    products: "api/get/products/",
    orders: "api/post/orders/",
    users: "api/users/signup",
    logins: "api/users/login",
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
      const cartData: Array<CartItem> = [{ //remove me
        sku: "HPI160100",
        displayItemName: "Red RC Car",
        displayCurrencyValue: 650,
        displayCurrencySaleValue: 550,
        displayCurrencyValueType: "CA",
        displayCurrencyValueSymbol: "$",
        productImageBinData: "Red RC Car.jpeg",
        quantityNumber: 3
      },
      {
        sku: "HPI160101",
        displayItemName: "Blue RC Car",
        displayCurrencyValue: 550,
        displayCurrencySaleValue: 450,
        displayCurrencyValueType: "CA",
        displayCurrencyValueSymbol: "$",
        productImageBinData: "GT Teal Racer Car.jpeg",
        quantityNumber: 7
      },
      {
        sku: "HPI160102",
        displayItemName: "Green RC Car",
        displayCurrencyValue: 350,
        displayCurrencySaleValue: 250,
        displayCurrencyValueType: "CA",
        displayCurrencyValueSymbol: "$",
        productImageBinData: "Green RC Car.jpeg",
        quantityNumber: 4
      }];
      return cartData;
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
      getProductData: async (): Promise<ProductItem[]> => {
        try
        {
          const response =  await httpClient.get(`${basePaths.products}${0}`);
          return response.data as ProductItem[];
        }
        catch (error)
        {
          return [];
        }
      },
      getSingleProductData: async (sku: string): Promise<ProductItem | undefined> => {
        try
        {
          const response =  await httpClient.get(`${basePaths.products}${sku}`);
          return response.data[0] as ProductItem;
        }
        catch (error)
        {
          return;
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
        catch (error: unknown)
        {
          if (error instanceof AxiosError) {
            return {status: 500, statusText: error.message }
        }
        return {status: 500, statusText: 'Failed' }
        }
      },
      LoginUser: async (username: string, password: string): Promise< {status: number, statusText: string }> => {
        try
        {
          axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
          const response =  await httpClient.post(basePaths.logins, {username: username, password: password });
          return {status: response.status, statusText: response.statusText };
        }
        catch (error: unknown)
        {
          if (error instanceof AxiosError) {
            return {status: 500, statusText: error.message }
        }
        return {status: 500, statusText: 'Failed' }
        }
      }
  }

  export default storeApiService;