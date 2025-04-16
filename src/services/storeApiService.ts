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

    getCartDatalocal:() => {
      const cartDataString = localStorage.getItem("cartData");
      if (cartDataString === null || cartDataString === "")
      {
        const cartData = [{
          sku: "HPI160100",
          displayItemName: "Red RC Car",
          displayCurrencyValue: 650,
          displaySaleCurrencyValue: 550,
          displayCurrencyValueType: "CAD",
          displayCurrencyValueSymbol: "$",
          productImageBinData: "/Testpath/img.jpg",
          quantityNumber: 3
        },
        {
          sku: "HPI160101",
          displayItemName: "Blue RC Car",
          displayCurrencyValue: 550,
          displaySaleCurrencyValue: 450,
          displayCurrencyValueType: "CAD",
          displayCurrencyValueSymbol: "$",
          productImageBinData: "/Testpath/img3.jpg",
          quantityNumber: 7
        },
        {
          sku: "HPI160102",
          displayItemName: "Green RC Car",
          displayCurrencyValue: 350,
          displaySaleCurrencyValue: 250,
          displayCurrencyValueType: "CAD",
          displayCurrencyValueSymbol: "$",
          productImageBinData: "/Testpath/img2.jpg",
          quantityNumber: 4
        }];
        return cartData;
      }
      return cartDataString;
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