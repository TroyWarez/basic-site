import axios from "axios";
import CartItem from "../models/CartItem"
import ProductItem from "../models/ProductItem";
import Address from "../models/Address";
import User from "../models/User";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
const httpClient = axios.create({
    baseURL: "http://troysdomain.com/",
    headers: {}
  });
  const basePaths = {
    coupons: "api/get/coupons/",
    cart: "api/cart/",
    products: "api/get/products/",
    orders: "api/post/orders/",
    users: "api/users/signup",
    address: "api/addresses",
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
      if (cartDataString !== "undefined" && cartDataString) {
        return JSON.parse(cartDataString) as Array<CartItem>;
      }

      return new Array<CartItem>();
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
          return response.data.order.orderNumber;
        }
        catch (error)
        {
          window.location.href = `${window.origin}/order-status`
        }
      },
      SignUpUser: async (username: string, password: string): Promise<User> => {
          axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
          const response =  await httpClient.post(basePaths.users, {username: username, password: password });
          return response.data;
      },
      LoginUser: async (username: string, password: string): Promise<User> => {
          axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
          const response =  await httpClient.post(basePaths.logins, {username: username, password: password });
          return response.data;
      },
      getUserCartData: async (userId: string): Promise<CartItem[]> => {
          axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
          if(userId === '' || userId.length < 24)
          {
            return storeApiService.getCartDatalocal();
          }
          try{
          const response = await httpClient.get(basePaths.cart + "/users/" + userId);
          return response.data['cartData'] as CartItem[];
          }
          catch (e){
            return [];
          }
      },
      setUserCartData: async (userId: string, cartItems: CartItem[]): Promise<string> => {
          axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
          try{
            if(userId.length < 24)
            {
              return 'UserId too is short';
            }
            else
            {
              await httpClient.post(basePaths.cart + "/users/" + userId, {cartItems});
            }
          return 'Good';
          }
          catch (e){
            return "Bad";
          }
      },
      getUserAddressData: async (userId: string): Promise<Address | null> => {
          axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
          try{
          const response = await httpClient.get(basePaths.address + "/" + userId);
          return ({ 
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            residentialAddress: response.data.residentialAddress,
            ExtraInfomation: response.data.ExtraInfomation,
            cityName: response.data.cityName,
            PostalCode: response.data.PostalCode,
            State: response.data.State,
            countryName: response.data.countryName,
            email: response.data.email,
            phoneNumber: response.data.phoneNumber.slice(6),
            promoEmails: false,
            guestOrder: false,
            orderedItems: []
        });
          }
          catch (e){
            return null;
          }
      },
      setUserAddressData: async (userId: string, savedAdress: Address): Promise<string> => {
          axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5173';
          try{
            if(userId.length < 24)
            {
              return 'UserId too is short';
            }
            else
            {
              await httpClient.post(basePaths.address + "/" + userId, {savedAdress});
            }
          return 'Good';
          }
          catch (e){
            return "Bad";
          }
      }
  }

  export default storeApiService;