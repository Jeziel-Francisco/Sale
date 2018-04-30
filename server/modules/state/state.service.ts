import { IState } from './state.model';

const models = require('./../../models');

class StateService {
    constructor() { }

    async findById(id: number) {
        return await models.State.findOne({ where: { id } });
    }

    async create(state: IState) {
        return await models.State.create(state);
    }

    async update(id: number, state: IState) {
        return await models.State.update(state, {
            where: { id },
            fields: ['initials', 'description']
        });
    }
}

export default new StateService();