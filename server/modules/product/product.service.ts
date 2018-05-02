import { IProduct } from './product.model';

import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class ProductService extends ServiceModules<IProduct> {

    constructor() {
        super(
            models.Product,
            ['description', 'priceCust', 'priceSale', 'priceSaleMin', 'active', 'packingId'],
            ['id', 'description', 'priceCust', 'priceSale', 'priceSaleMin', 'active', 'packingId']
        );
    }

    async remove(id: number) {
        return await models.Permissions.update({ active: false, cancellationDate: Date.now },
            {
                where: { id },
                fields: ['active', 'cancellationDate']
            });
    }
}

export default new ProductService();