import CartItem from "./CartItem";
import Address from "./Address";
export default interface User {
  _id: string;
  username: string;
  savedCart: CartItem[];
  savedAddress: Address;
}