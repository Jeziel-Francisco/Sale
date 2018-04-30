interface IClientAddress {
    id: number;
    number: string;
    complement: string;
    reference: string;
    clientId: number; // chave estrangeira do cliente
    addressId: number; // chave estrangeira do endereço
}

export { IClientAddress };