import { ICompany } from './company.model';

const models = require('./../../models');

class CompanyService {
    constructor() { }

    async findById(id: number) {
        return await models.Company.findOne({ where: { id } });
    }

    async create(company: ICompany) {
        return await models.Company.create(company);
    }

    async update(id: number, company: ICompany) {
        return await models.Company.update(company, {
            where: { id },
            fields: ['active', 'name', 'nameFantasy', 'registrationState', 'registrationMunicipal', 'identification']
        });
    }

    async remove(id: number) {
        return await models.Company.update({
            active: false,
            cancellationDate: Date.now
        }, {
                where: { id },
                fields: ['active', 'cancellationDate']
            });
    }
}

export default new CompanyService(); 