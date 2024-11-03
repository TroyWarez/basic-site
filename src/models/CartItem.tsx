export default interface CartItem {
    sku: number | string;
    displayItemName?: string;
    displayCurrencyValue: number;
    displayCurrencyValueType: string;
    displayCurrencyValueSymbol: string;
    productImagePath?: string;
    quantityNumber: number;
}