import { Request, Response } from 'express';

import AddressBusiness from './address.business';
import ControllerModules from '../interface-controller.modules';

class AddressController extends ControllerModules {
    constructor() {
        super(AddressBusiness);
    }
}

export default new AddressController();