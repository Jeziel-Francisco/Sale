interface IAddress {
    id: number;
    place: string;
    zipCode: string;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    neighborhood: string;
    cityId: number;   // Chave estrangeira da cidade
}

export { IAddress };