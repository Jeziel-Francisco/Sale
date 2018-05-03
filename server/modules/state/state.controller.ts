import { Request, Response } from 'express';

import StateBusiness from './state.business';
import ControllerModules from '../interface-controller.modules';

class StateController extends ControllerModules {
    constructor() {
        super(StateBusiness);
    }
}

export default new StateController();