import { Request, Response } from 'express';

import SaleBusiness from './sale.business';
import ControllerModules from '../interface-controller.modules';

class SaleController extends ControllerModules {
    constructor() {
        super(SaleBusiness);
    }


}

export default new SaleController();