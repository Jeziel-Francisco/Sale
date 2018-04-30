import { IClientPhone } from './client-phone.model';

const models = require('./../../models');

class ClientPhoneService {
    constructor() { }

    async findById(id: number) {
        return await models.ClientPhone.findOne({ where: { id } });
    }

    async create(phoneClient: IClientPhone) {
        return await models.ClientPhone.create(phoneClient);
    }

    async update(id: number, phoneClient: IClientPhone) {
        return await models.ClientPhone.update(phoneClient, {
            where: { id },
            fields: ['phone', 'contact']
        });
    }

    async remove(id: number) {
        return await models.ClientPhone.remove({ where: { id } });
    }
}

export default new ClientPhoneService();