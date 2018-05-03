import { IPermissions } from './permissions.model';
import { Response } from 'express';

import PermissionsService from './permissions.service';
import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
import BusinessModules from '../interfate-business.modules';

class PermissionsBusiness extends BusinessModules<IPermissions> {
    constructor() {
        super(PermissionsService);
    }
}

export default new PermissionsBusiness();