export default interface ProductItem {
    sku: number | string;
    displayItemName?: string;
    displayItemDescription: string;
    displayCurrencyValue: number;
    displayCurrencySaleValue: number;
    displayCurrencyValueType: string;
    displayCurrencyValueSymbol: string;
    productImageBinData: string;
    stockAmount: number;
    categories: string[];
    dateAdded: string;
}