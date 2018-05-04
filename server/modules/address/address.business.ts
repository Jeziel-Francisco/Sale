import { IAddress } from './address.model';
import { Response } from 'express';

import AddressService from './address.service';
import BusinessModules from '../interfate-business.modules';

class AddressBusiness extends BusinessModules<IAddress> {
    constructor() {
        super(AddressService);
    }
}

export default new AddressBusiness();