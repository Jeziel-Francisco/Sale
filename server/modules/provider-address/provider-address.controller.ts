import { Request, Response } from 'express';

import ControllerModules from "../interface-controller.modules";

import ProviderAddressBusiness from './provider-address.business';

class ProviderAddressController extends ControllerModules {
    constructor() {
        super(ProviderAddressBusiness);
    }
}

export default new ProviderAddressController();