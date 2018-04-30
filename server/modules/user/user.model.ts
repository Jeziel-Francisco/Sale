interface IUser {
    id: number;
    name: string;
    email: string;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    password: string;
    username: string;
    companyId: number; // chave estrangeira da company
}

export { IUser };