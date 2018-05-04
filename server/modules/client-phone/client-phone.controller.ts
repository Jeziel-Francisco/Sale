import { Request, Response } from 'express';

import ClientPhoneBusiness from './client-phone.business';
import ControllerModules from '../interface-controller.modules';

class ClientPhoneController extends ControllerModules {
    constructor() {
        super(ClientPhoneBusiness);
    }
}

export default new ClientPhoneController();