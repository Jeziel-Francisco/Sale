import { Request, Response } from 'express';

import ControllerModules from '../interface-controller.modules';
import ProductSaleBusiness from './product-sale.business';

class ProductSaleController extends ControllerModules {
    constructor() {
        super(ProductSaleBusiness);
    }
}

export default new ProductSaleController();