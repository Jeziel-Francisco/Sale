import { IProviderAddress } from './provider-address.model';
import { Request, Response } from 'express';

import BusinessModules from "../interfate-business.modules";
import ProviderAddressService from './provider-address.service';

class ProviderAddressBusiness extends BusinessModules<IProviderAddress>{
    constructor() {
        super(ProviderAddressBusiness);
    }
}

export default new ProviderAddressBusiness();