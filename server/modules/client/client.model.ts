interface IClient {
    id: number;
    name: string;
    nameFantasy: string;
    registrationState: string;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    registrationMunicipal: string;
    identification: string;
    companyId: number; // chave estrangeira da empresa
}

export { IClient };