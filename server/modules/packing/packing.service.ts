import { IPacking } from './packing.model';

import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class PackingService extends ServiceModules<IPacking> {

    constructor() {
        super(
            models.Packing,
            ['description', 'initials', 'factor', 'active'],
            ['id', 'description', 'initials', 'factor', 'active']
        );
    }

    async remove(id: number) {
        return await models.Packing.update({ active: false, cancellationDate: Date.now },
            {
                where: { id },
                fields: ['active', 'cancellationDate']
            });
    }
}

export default new PackingService();

