import { IProductProvider } from './product-provider.model';
import { Request, Response } from 'express';

import BusinessModules from '../interfate-business.modules';
import ProductProviderService from './product-provider.service';

class ProductProviderBusiness extends BusinessModules<IProductProvider> {
    constructor() {
        super(ProductProviderService);
    }
}

export default new ProductProviderBusiness();