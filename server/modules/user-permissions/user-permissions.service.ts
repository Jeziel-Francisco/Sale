import { IUserPermissions } from './user-permissions.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class UserPermissionsService extends ServiceModules<IUserPermissions> {
    constructor() {
        super(
            models.UserPermissions,
            ['note', 'userIdPermissions', 'permissionsId', 'userId'],
            ['id', 'note', 'userIdPermissions', 'permissionsId', 'userId']
        );
    }
}

export default new UserPermissionsService();