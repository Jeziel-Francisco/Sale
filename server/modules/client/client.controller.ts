import { Request, Response } from 'express';

import ClientBusiness from './client.business';
import ControllerModules from '../interface-controller.modules';

class ClientController extends ControllerModules {
    constructor() {
        super(ClientBusiness);
    }
}

export default new ClientController();