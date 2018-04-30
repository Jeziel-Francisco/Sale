interface IReceive {
    id: number;
    history: string;
    portion: string; // Parcela
    priceTotal: number;
    balance: number; // Saldo
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    emissionDate: Date;
    maturityDate: Date; //Vencimento
    paymentDate: Date;
    priceInterest: number; //Juros
    clientId: number;
    saleId: number;
}

export { IReceive };