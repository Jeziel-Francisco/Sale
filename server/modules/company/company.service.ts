import { ICompany } from './company.model';

import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class CompanyService extends ServiceModules<ICompany>{
    constructor() {
        super(
            models.Company,
            ['name', 'nameFantasy', 'registrationState', 'registrationMunicipal', 'active', 'registrationDate', 'cancellationDate', 'identification'],
            ['id', 'name', 'nameFantasy', 'registrationState', 'registrationMunicipal', 'active', 'registrationDate', 'cancellationDate', 'identification']
        );
    }

    async remove(id: number) {
        return await models.Company.update({
            cancellationDate: Date.now,
            active: false
        }, {
                where: { id },
                fields: ['cancellationDate', 'active']
            });
    }
}

export default new CompanyService();