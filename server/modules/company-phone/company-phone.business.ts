import { ICompanyPhone } from './company-phone.model';
import { Response } from 'express';

import CompanyPhoneService from './company-phone.service';
import BusinessModules from '../interfate-business.modules';


class CompanyPhoneBusiness extends BusinessModules<ICompanyPhone>{
    constructor() {
        super(CompanyPhoneService);
    }
}

export default new CompanyPhoneBusiness();