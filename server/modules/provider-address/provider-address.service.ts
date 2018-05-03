import { IProviderAddress } from './provider-address.model';

import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class ProviderAddressService extends ServiceModules<IProviderAddress>{
    constructor() {
        super(
            models.ProviderAddress,
            ['number', 'complement', 'reference',],
            ['id', 'number', 'complement', 'reference', 'providerId', 'addressId']
        );
    }
}

export default new ProviderAddressService();