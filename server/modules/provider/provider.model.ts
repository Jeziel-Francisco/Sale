interface IProvider {
    id: number;
    name: string;
    nameFantasy: string;
    registrationState: string;
    registrationMunicipal: string;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    identification: string;
    companyId: number;
}

export { IProvider };