interface IClientPhone {
    id: number;
    phone: string;
    contact: string;
    clientId: number; // chave estrangeira
}

export { IClientPhone };