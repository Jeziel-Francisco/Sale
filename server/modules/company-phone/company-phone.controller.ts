import { Request, Response } from 'express';

import CompanyPhoneBusiness from './company-phone.business';
import ControllerModules from '../interface-controller.modules';

class CompanyPhoneController extends ControllerModules {
    constructor() {
        super(CompanyPhoneBusiness);
    }
}

export default new CompanyPhoneController();