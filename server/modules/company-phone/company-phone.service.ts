import { ICompanyPhone } from './company-phone.model';

const models = require('./../../models');

class CompanyPhoneService {
    constructor() { }

    async findById(id: number) {
        return await models.CompanyPhone.findOne({ where: { id } });
    }

    async create(companyPhone: ICompanyPhone) {
        return await models.CompanyPhone.create(companyPhone);
    }

    async update(id: number, companyPhone: ICompanyPhone) {
        return await models.CompanyPhone.update(companyPhone, {
            where: { id },
            fields: ['phone', 'contact']
        });
    }

    async remove(id: number) {
        return await models.CompanyPhone.destroy({ where: { id } });
    }
}

export default new CompanyPhoneService();