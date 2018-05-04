import { IClientAddress } from './client-address.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class ClientAddressService extends ServiceModules<IClientAddress> {
    constructor() {
        super(
            models.ClientAddress,
            ['number', 'complement', 'reference'],
            ['id', 'clientId', 'addressId', 'number', 'complement', 'reference']
        );
    }

}

export default new ClientAddressService(); 