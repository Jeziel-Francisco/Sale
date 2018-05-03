import { IState } from './state.model';
import { Response } from 'express';

import StateService from './state.service';
import BusinessModules from '../interfate-business.modules';

class StateBusiness extends BusinessModules<IState>{
    constructor() {
        super(StateService);
    }
}

export default new StateBusiness();