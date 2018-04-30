import { IUserPermissions } from './user-permissions.model';

const models = require('./../../models');

class UserPermissionsService {
    constructor() { }

    async findById(id: number) {
        return await models.UserPermissions.findOne({ where: { id } });
    }

    async create(permissionsUser: IUserPermissions) {
        return await models.UserPermissions.create(permissionsUser);
    }

    async update(id: number, permissionsUser: IUserPermissions) {
        return await models.UserPermissions.update(permissionsUser, {
            where: { id },
            fields: ['note']
        });
    }

    async remove(id: number) {
        return await models.UserPermissions.destroy({ where: { id } });
    }
}

export default new UserPermissionsService();