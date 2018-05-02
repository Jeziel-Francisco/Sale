import { IProvider } from './provider.model';

import ServiceModules from './../interface-service.modules';

const models = require('./../../models');

class ProviderService extends ServiceModules<IProvider>{
    constructor() {
        super(
            models.Provider,
            ['name', 'nameFantasy', 'registrationState', 'active', 'registrationDate', 'cancellationDate', 'identification'],
            ['name', 'nameFantasy', 'registrationState', 'active', 'registrationDate', 'cancellationDate', 'identification', 'companyId']
        );
    }

    async remove(id: number) {
        return await models.Provider.update({
            cancellationDate: Date.now,
            active: false
        }, {
                where: { id },
                fields: ['cancellationDate', 'active']
            });
    }
}

export default new ProviderService();