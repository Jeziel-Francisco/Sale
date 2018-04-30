interface ICity {
    id: number;
    name: string;
    code: number;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    stateId: number;     // chave estrangeria do estado
}

export { ICity };