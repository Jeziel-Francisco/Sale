import { IProductGroup } from './product-group.model';

import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class ProductGroupService extends ServiceModules<IProductGroup> {
    constructor() {
        super(
            models.ProductGroup,
            ['description', 'productId', 'groupId'],
            ['id', 'description', 'productId', 'groupId']
        );
    }
}

export default new ProductGroupService;