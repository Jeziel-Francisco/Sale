import { ICompanyAddress } from './company-address.model';
import { Response } from 'express';

import CompanyAddressService from './company-address.service';

import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
import BusinessModules from '../interfate-business.modules';

class CompanyAddressBusiness extends BusinessModules<ICompanyAddress> {
    constructor() {
        super(CompanyAddressBusiness);
    }
}

export default new CompanyAddressBusiness();