export default interface CartItem {
    value?: number | string;
    sku?: number | string;
    displayItemName?: string;
    displayCurrencyValue?: string;
    productImagePath?: string;
    quantityNumber?: number;
}