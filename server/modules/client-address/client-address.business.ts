import { IClientAddress } from './client-address.model';
import { Response } from "express";

import ClientAddressService from './client-address.service';

import BusinessModules from '../interfate-business.modules';


class ClientAddressBusiness extends BusinessModules<IClientAddress> {
    constructor() {
        super(ClientAddressService);
    }
}

export default new ClientAddressBusiness();