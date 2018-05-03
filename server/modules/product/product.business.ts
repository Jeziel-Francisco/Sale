import { IProduct } from './product.model';
import { Response } from 'express';

import ProductService from './product.service';

import BusinessModules from '../interfate-business.modules';

class ProductBusiness extends BusinessModules<IProduct>{
    constructor() {
        super(ProductService);
    }
}

export default new ProductBusiness();