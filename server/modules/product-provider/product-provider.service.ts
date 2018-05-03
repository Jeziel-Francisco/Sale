import { IProductProvider } from './product-provider.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class ProductProviderService extends ServiceModules<IProductProvider>{
    constructor() {
        super(
            models.ProductProvider,
            [''],
            ['id', 'providerId', 'productId']
        );
    }
}

export default new ProductProviderService();