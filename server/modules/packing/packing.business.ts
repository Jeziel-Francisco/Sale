import { IPacking } from './packing.model';
import { Response } from 'express';

import BusinessModules from '../interfate-business.modules';
import PackingService from './packing.service';

class PackingBusiness extends BusinessModules<IPacking> {
    constructor() {
        super(PackingService);
    }
}

export default new PackingBusiness();