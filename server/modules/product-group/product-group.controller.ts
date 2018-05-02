import { Request, Response } from 'express';

import ControllerModules from '../interface-controller.modules';
import ProductGroupBusiness from './product-group.business';

class ProductGroupController extends ControllerModules {
    constructor() {
        super(ProductGroupBusiness);
    }
}

export default new ProductGroupController();