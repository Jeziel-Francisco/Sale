interface ICompany {
    id: number;
    name: string;
    nameFantasy: string;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    registrationState: string;
    registrationMunicipal: string;
    identification: string;
}

export { ICompany }