import { Request, Response } from 'express';

import ControllerModules from '../interface-controller.modules';
import ReceiveBusiness from './receive.business';

class ReceiveController extends ControllerModules {
    constructor() {
        super(ReceiveBusiness);
    }
}

export default new ReceiveController();