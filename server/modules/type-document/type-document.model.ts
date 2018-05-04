interface ITypeDocument {
    id: number;
    isReceive: boolean;
    isLiquidate: boolean;
    typeDocument: string;
    description: string;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    companyId: number;
}

export { ITypeDocument };