import { IGroup } from './group.model';

import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class GroupService extends ServiceModules<IGroup>{
    constructor() {
        super(
            models.Group,
            ['description', 'active'],
            ['id', 'description', 'active']
        );
    }

    async remove(id: number) {
        return await models.Group.update({ active: false, cancellationDate: Date.now }, {
            where: { id },
            fields: ['active', 'cancellationDate']
        });
    }
}

export default new GroupService();