interface IGroup {
    id: number;
    description: string;
    registrationDate: Date;
    cancellationDate: Date;
    active: boolean;
}

export { IGroup };