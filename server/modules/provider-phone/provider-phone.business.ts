import { IProviderPhone } from './provider-phone.model';
import { Response } from 'express';

import ProviderPhoneService from './provider-phone.service';

import BusinessModules from '../interfate-business.modules';

class ProviderPhoneBusiness extends BusinessModules<IProviderPhone> {
    constructor() {
        super(ProviderPhoneService);
    }
}

export default new ProviderPhoneBusiness();