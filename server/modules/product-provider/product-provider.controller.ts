import { Request, Response } from 'express';

import ControllerModules from '../interface-controller.modules';
import ProductProviderBusiness from './product-provider.business';

class ProductProviderController extends ControllerModules {
    constructor() {
        super(ProductProviderBusiness);
    }
}

export default new ProductProviderController();