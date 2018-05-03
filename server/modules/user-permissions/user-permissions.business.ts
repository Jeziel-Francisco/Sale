import { IUserPermissions } from './user-permissions.model';
import { Response } from 'express';

import UserPermissionsService from './user-permissions.service';

import BusinessModules from '../interfate-business.modules';

class UserPermissionsBusiness extends BusinessModules<IUserPermissions> {
    constructor() {
        super(UserPermissionsService);
    }

}

export default new UserPermissionsBusiness();