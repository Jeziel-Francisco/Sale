import { ICompanyAddress } from './company-address.model';

const models = require('./../../models');

class CompanyAddressService {
    constructor() { }

    async findById(id: number) {
        return await models.CompanyAddress.findOne({ where: { id } });
    }

    async create(companyAddress: ICompanyAddress) {
        return await models.CompanyAddress.create(companyAddress);
    }

    async update(id: number, companyAddress: ICompanyAddress) {
        return await models.CompanyAddress.update(companyAddress, {
            where: { id },
            fields: ['number', 'complement', 'reference']
        });
    }

    async remove(id: number): Promise<any> {
        return await models.CompanyAddress.remove({ where: { id } });
    }
}

export default new CompanyAddressService();
