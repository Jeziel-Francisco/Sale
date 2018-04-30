import { IClient } from './client.model';

const models = require('./../../models');

class ClientService {
    constructor() { }

    async findById(id: number) {
        return await models.Client.findOne({ where: { id } });
    }

    async create(client: IClient) {
        return await models.Client.create(client);
    }

    async update(id: number, client: IClient) {
        return await models.Client.update(client, {
            where: { id },
            fields: ['name', 'nameFantasy', 'registrationState', 'active', 'registrationMunicipal', 'identification']
        });
    }

    async remove(id: number) {
        return await models.Client.update({
            active: false,
            cancellationDate: Date.now
        }, {
                where: { id },
                fields: ['active', 'cancellationDate']
            });
    }

}

export default new ClientService();