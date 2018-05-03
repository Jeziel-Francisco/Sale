import { IState } from './state.model';

import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class StateService extends ServiceModules<IState>{
    constructor() {
        super(
            models.State,
            ['initials', 'description'],
            ['id', 'initials', 'description']
        );
    }
}

export default new StateService();