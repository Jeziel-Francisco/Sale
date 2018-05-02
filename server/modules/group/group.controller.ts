import { Request, Response } from 'express';
import GroupBusiness from './group.business';

import ControllerModules from './../interface-controller.modules';

class GroupController extends ControllerModules {
    constructor() {
        super(GroupBusiness);
    }
}

export default new GroupController();