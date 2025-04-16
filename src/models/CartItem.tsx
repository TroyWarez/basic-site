export default interface CartItem {
    sku: number | string;
    displayItemName?: string;
    displayCurrencyValue: number;
    displayCurrencySaleValue: number;
    displayCurrencyValueType: string;
    displayCurrencyValueSymbol: string;
    productImage: string;
    quantityNumber: number;
}