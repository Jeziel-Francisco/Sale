import { IPermissions } from './permissions.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class PermissionsService extends ServiceModules<IPermissions>{
    constructor() {
        super(
            models.Permissions,
            ['active', 'event', 'page'],
            ['id', 'active', 'registrationDate', 'cancellationDate', 'event', 'page']
        );
    }

    async remove(id: number) {
        return await models.Permissions.update({
            active: false,
            cancellationDate: Date.now
        }, {
                where: { id },
                fields: ['active', 'cancellationDate']
            });
    }

}

export default new PermissionsService();