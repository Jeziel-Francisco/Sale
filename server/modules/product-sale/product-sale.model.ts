interface IProductSale {
    id: number;
    amount: number;
    priceUnit: number;
    priceTotal: number;
    note: string;
    discount: number;
    productId: number;
    saleId: number;
}

export { IProductSale };