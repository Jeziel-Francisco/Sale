import { Request } from 'express';
import { IProvider } from './provider.model';

import BusinessModules from "../interfate-business.modules";

import ProviderService from './provider.service';

class ProviderBusiness extends BusinessModules<IProvider> {
    constructor() {
        super(ProviderService);
    }
}

export default new ProviderBusiness();