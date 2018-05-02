import { Response } from 'express';
import { IGroup } from './group.model';

import BusinessModules from '../interfate-business.modules';
import GroupService from './group.service';
import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';

class GroupBusiness extends BusinessModules<IGroup>{
    constructor() {
        super(GroupService);
    }
}

export default new GroupBusiness();