import { ICompanyAddress } from './company-address.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class CompanyAddressService extends ServiceModules<ICompanyAddress>{
    constructor() {
        super(
            models.CompanyAddress,
            ['number', 'complement', 'reference',],
            ['id', 'number', 'complement', 'reference', 'companyId', 'addressId']
        );
    }
}

export default new CompanyAddressService();
