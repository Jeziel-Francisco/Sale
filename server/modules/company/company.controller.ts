import { Request, Response } from 'express';

import CompanyBusiness from './company.business';
import ControllerModules from '../interface-controller.modules';

class CompanyController extends ControllerModules {

    constructor() {
        super(CompanyBusiness);
    }
}


export default new CompanyController();