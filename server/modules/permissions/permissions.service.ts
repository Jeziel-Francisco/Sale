import { IPermissions } from './permissions.model';

const models = require('./../../models');

class PermissionsService {
    constructor() { }

    async findById(id: number): Promise<IPermissions> {
        return await models.Permissions.findOne({ where: { id } });
    }

    async create(permissions: IPermissions) {
        return await models.Permissions.create(permissions);
    }

    async update(id: number, permissions: IPermissions) {
        return await models.Permissions.update(permissions, {
            where: { id },
            fields: ['active', 'event', 'page']
        });
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