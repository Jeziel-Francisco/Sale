interface ISale {
    id: number;
    emissionDate: Date;
    type: number;
    priceTotal: number;
    note: string;
    discount: number;
    closingDate: Date;
    registrationDate: Date;
    cancellationDate: Date;
    active: boolean;
    companyId: number;
    clientId: number;
}

export { ISale };