Modulos Pendentes

Product,            Model | Assert | Controller | Business | Service
Product-Group,      Model | Assert | Controller | Business | Service
Group,              Model | Assert | Controller | Business | Service
Provider,           Model | Assert | Controller | Business | Service
Provider-Address,   Model | Assert | Controller | Business | Service
Provide-Phone,      Model | Assert | Controller | Business | Service
Product-Provider,   Model | Assert | Controller | Business | Service
Sale,               Model | Assert | Controller | Business | Service
Product-Sale,       Model | Assert | Controller | Business | Service
Receive-Payment,    Model | Assert | Controller | Business | Service
Receive,            Model | Assert | Controller | Business | Service
Packing             Model | Assert | Controller | Business | Service
TypeDocument






Client-Phone,
Client-Address,
Client,
City,
Address,
User

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

interface IAddress {
    id: number;
    place: string;
    zipCode: string;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    neighborhood: string;
    cityId: number;   // Chave estrangeira da cidade
}

interface ICity {
    id: number;
    name: string;
    code: number;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    stateId: number;     // chave estrangeria do estado
}

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

interface IClientAddress {
    id: number;
    number: string;
    complement: string;
    reference: string;
    clientId: number; // chave estrangeira do cliente
    addressId: number; // chave estrangeira do endereço
}

interface IClientPhone {
    id: number;
    phone: string;
    contact: string;
    clientId: number; // chave estrangeira
}
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

interface ICompanyPhone {
    id: number;
    phone: string;
    contact: string;
    companyId: number;
}
interface IGroup {
    id: number;
    description: string;
    registrationDate: Date;
    cancellationDate: Date;
    active: boolean;
}
interface IPacking {
    id: number;
    description: string;
    initials: string;
    factor: number;
    active: boolean;
}

interface IPermissions {
    id: number;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    event: number;
    page: string;
}

interface IProduct {
    id: number;
    description: string;
    priceCust: number;
    priceSale: number;
    priceSaleMin: number;
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    companyId: number;
    packingId: number;
}
interface IProductProvider {
    id: number;
    providerId: number;
    productId: number;
}

interface IProductSale {
    id: number;
    amount: number;
    priceUnit: number;
    priceTotal: number;
    note: string;
    discount: number;
    productId: number;
    saleId: number;
}

interface IProviderAddress {
    id: number;
    number: string;
    complement: string;
    reference: string;
    providerId: number;
    addressId: number;
}
interface IProviderPhone {
    id: number;
    phone: string;
    contact: string;
    providerId: number;
}


interface IReceive {
    id: number;
    history: string;
    portion: string; // Parcela
    priceTotal: number;
    balance: number; // Saldo
    active: boolean;
    registrationDate: Date;
    cancellationDate: Date;
    emissionDate: Date;
    maturityDate: Date; //Vencimento
    paymentDate: Date;
    priceInterest: number; //Juros
    clientId: number;
    saleId: number;
}

interface IReceivePayment {
    id: number;
    registrationDate: Date;
    cancellationDate: Date;
    paymentDate: Date;
    pricePaid: number;// Preco Pago,
    priceDiscount: number;
    active: boolean;
    receiveId: number;
}

interface ISale {
    id: number;
    emissionDate: Date;
    type: number;
    priceTotal: number;
    note: string;
    discount: number;
    closingDate: Date;
    registrationDate: Date;
    cancellationDate: Date;
    active: boolean;
    companyId: number;
    clientId: number;
}

interface IState {
    id: number;
    initials: string;
    description: string;
}

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