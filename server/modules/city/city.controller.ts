import { Request, Response } from 'express';

import CityBusiness from './city.business';
import ControllerModules from '../interface-controller.modules';

class CityController extends ControllerModules {
    constructor() {
        super(CityBusiness);
    }
}

export default new CityController();