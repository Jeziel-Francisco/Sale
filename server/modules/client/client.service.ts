import { IClient } from './client.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class ClientService extends ServiceModules<IClient> {
    constructor() {
        super(
            models.Client,
            ['name', 'nameFantasy', 'registrationState', 'active', 'registrationMunicipal', 'identification'],
            ['id', 'name', 'nameFantasy', 'registrationState', 'registrationDate', 'cancellationDate', 'active', 'registrationMunicipal', 'identification']
        );
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