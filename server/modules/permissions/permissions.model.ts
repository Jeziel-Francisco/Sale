interface IPermissions {
    id: number;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    event: number;
    page: string;
}

export { IPermissions };