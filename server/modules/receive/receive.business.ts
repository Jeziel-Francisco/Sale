import { IReceive } from './receive.model';
import { Response } from 'express';

import BusinessModules from '../interfate-business.modules';
import ReceiveSerice from './receive.service';

class ReceiveBusiness extends BusinessModules<IReceive> {
    constructor() {
        super(ReceiveSerice);
    }
}

export default new ReceiveBusiness();