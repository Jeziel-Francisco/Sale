import { Response, Request } from 'express';

import UserPermissionsBusiness from './user-permissions.business';

import ControllerModules from '../interface-controller.modules';

class UserPermissionsController extends ControllerModules {
    constructor() {
        super(UserPermissionsBusiness);
    }
}

export default new UserPermissionsController();