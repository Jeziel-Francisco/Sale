
import { ICompany } from './company.model';
import { Response } from 'express';

import CompanyService from './company.service';
import BusinessModules from '../interfate-business.modules';

class CompanyBusiness extends BusinessModules<ICompany> {
    constructor() {
        super(CompanyService);
    }
}

export default new CompanyBusiness();