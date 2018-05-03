import { Request, Response } from 'express';

import CompanyAddressBusiness from './company-address.business';
import ControllerModules from '../interface-controller.modules';

class CompanyAddressController extends ControllerModules {
    constructor() {
        super(CompanyAddressBusiness);
    }
}

export default new CompanyAddressController();