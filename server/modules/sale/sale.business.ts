import { Response } from 'express';
import { ISale } from './sale.model';

import SaleService from './sale.service';
import BusinessModules from '../interfate-business.modules';

class SaleBusiness extends BusinessModules<ISale>{
    constructor() {
        super(SaleService);
    }
}

export default new SaleBusiness();