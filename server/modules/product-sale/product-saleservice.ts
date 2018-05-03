import { IProductSale } from './product-sale.model';

import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class ProductSaleService extends ServiceModules<IProductSale> {
    constructor() {
        super(
            models.ProductSale,
            ['amount', 'priceUnit', 'priceTotal', 'note', 'discount', 'productId'],
            ['id', 'amount', 'priceUnit', 'priceTotal', 'note', 'discount', 'productId', 'saleId']
        );
    }
}

export default new ProductSaleService();
