import { Request, Response } from 'express';

import ControllerModules from "../interface-controller.modules";
import PackingBusiness from './packing.business';

class PackingController extends ControllerModules {
    constructor() {
        super(PackingBusiness);
    }
}

export default new PackingController();