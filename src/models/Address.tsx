import StoreItem from "./StoreItem";
export default interface Address {
    firstName: string;
    lastName: string;
    residentialAddress: string;
    ExtraInfomation: string;
    cityName: string;
    PostalCode: string;
    State: string;
    countryName: string;
    email: string;
    phoneNumber: string;
    promoEmails: boolean;
    guestOrder: boolean;
    orderedItems: StoreItem[];
}