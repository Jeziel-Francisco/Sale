import { IProductGroup } from '../product-group/product-group.model';
import { Response } from 'express';

import response from './../../api/responses/response.default';
import ProductGroupService from './product-group.service';

import * as HttpStatus from 'http-status';
import BusinessModules from '../interfate-business.modules';

class ProductGroupBusiness extends BusinessModules<IProductGroup> {
    constructor() {
        super(ProductGroupService);
    }
}

export default new ProductGroupBusiness();