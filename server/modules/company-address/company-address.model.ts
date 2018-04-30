interface ICompanyAddress {
    id: number;
    number: string;
    complement: string;
    reference: string;
    companyId: number; // chave estrangeira do Company
    addressId: number;
}

export { ICompanyAddress }