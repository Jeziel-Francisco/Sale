import { ISale } from './sale.model';

import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class SaleService extends ServiceModules<ISale> {
    constructor() {
        super(
            models.Sale,
            ['emissionDate', 'type', 'priceTotal', 'note', 'discount', 'closingDate', 'active'],
            ['id', 'emissionDate', 'type', 'priceTotal', 'note', 'discount', 'closingDate', 'registrationDate', 'cancellationDate', 'active', 'companyId', 'clientId']
        );
    }

    async remove(id: number) {
        return await models.Sale.update({ cancellationDate: Date.now, active: false }, {
            where: { id },
            fields: ['cancellationDate', 'active']
        });
    }
}

export default new SaleService();