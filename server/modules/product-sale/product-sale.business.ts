import { IProductSale } from './product-sale.model'
import { Response } from 'express';

import BusinessModules from '../interfate-business.modules';
import ProductSaleService from './product-saleservice';

class ProductSaleBusiness extends BusinessModules<IProductSale>{
    constructor() {
        super(ProductSaleService);
    }
}

export default new ProductSaleBusiness();