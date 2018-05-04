import { IClient } from './client.model';
import { Response } from 'express';

import ClientService from './client.service';
import BusinessModules from '../interfate-business.modules';

class ClientBusiness extends BusinessModules<IClient> {
    constructor() {
        super(ClientService);
    }
}

export default new ClientBusiness();