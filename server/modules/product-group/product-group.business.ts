import { IProductGroup } from '../product-group/product-group.model';
import { Response } from 'express';

import ProductGroupService from './product-group.service';

import BusinessModules from '../interfate-business.modules';

class ProductGroupBusiness extends BusinessModules<IProductGroup> {
    constructor() {
        super(ProductGroupService);
    }
}

export default new ProductGroupBusiness();