export default interface CartItem {
    value?: number | string;
    sku?: number | string;
    displayItemName?: string;
    displayCurrencyValue: number;
    displayCurrencyValueType: string;
    productImagePath?: string;
    quantityNumber?: number;
}