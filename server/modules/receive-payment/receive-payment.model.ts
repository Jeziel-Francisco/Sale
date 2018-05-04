interface IReceivePayment {
    id: number;
    registrationDate: Date;
    cancellationDate: Date;
    paymentDate: Date;
    pricePaid: number;// Preco Pago,
    priceDiscount: number;
    active: boolean;
    receiveId: number;
    typeDocumentId: number;
}

export { IReceivePayment };