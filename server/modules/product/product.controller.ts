import { Request, Response } from 'express';

import ControllerModules from '../interface-controller.modules';
import ProductBusiness from './product.business';

class ProductController extends ControllerModules {
    constructor() {
        super(ProductBusiness);
    }
}

export default new ProductController();