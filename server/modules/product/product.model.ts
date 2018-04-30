interface IProduct {
    id: number;
    description: string;
    priceCust: number;
    priceSale: number;
    priceSaleMin: number;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    companyId: number;
    packingId: number;
}

export { IProduct };