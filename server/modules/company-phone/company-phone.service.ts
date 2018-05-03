import { ICompanyPhone } from './company-phone.model';

import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class CompanyPhoneService extends ServiceModules<ICompanyPhone> {
    constructor() {
        super(
            models.CompanyPhone,
            ['phone', 'contact'],
            ['id', 'phone', 'contact', 'companyId']
        );
    }
}

export default new CompanyPhoneService();