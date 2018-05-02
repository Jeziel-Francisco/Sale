import { IProduct } from './product.model';
import { Response } from 'express';

import ProductService from './product.service';
import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
import BusinessModules from '../interfate-business.modules';


class ProductBusiness extends BusinessModules<IProduct>{
    constructor() {
        super(ProductService);
    }
}

export default new ProductBusiness();