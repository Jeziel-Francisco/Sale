import { ICity } from './city.model';
import { Response } from 'express';

import CityService from './city.service';
import BusinessModules from '../interfate-business.modules';

class CityBusiness extends BusinessModules<ICity>{
    constructor() {
        super(CityService);
    }
}

export default new CityBusiness();