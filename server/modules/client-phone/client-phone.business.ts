import { IClientPhone } from './client-phone.model';
import { Request, Response } from 'express';

import ClientPhoneService from './client-phone.service';
import BusinessModules from '../interfate-business.modules';

class ClientPhoneBusiness extends BusinessModules<IClientPhone> {
    constructor() {
        super(ClientPhoneService);
    }
}

export default new ClientPhoneBusiness();