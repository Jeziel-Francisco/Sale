import { Request, Response } from 'express';

import PermissionsBusiness from './permissions.business';
import ControllerModules from '../interface-controller.modules';

class PermissionsController extends ControllerModules {
    constructor() {
        super(PermissionsBusiness);
    }
}

export default new PermissionsController();