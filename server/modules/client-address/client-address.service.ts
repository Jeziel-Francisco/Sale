import { IClientAddress } from './client-address.model';

const models = require('./../../models');

class ClientAddressService {
    constructor() { }

    async findById(id) {
        return await models.ClientAddress.findOne({ where: { id } });
    }

    async create(clientAddress: IClientAddress) {
        return await models.ClientAddress.create(clientAddress);
    }

    async update(id: number, clientAddress: IClientAddress) {
        return await models.ClientAddress.update(clientAddress, {
            where: { id },
            fields: ['number', 'complement', 'reference']
        });
    }

    async remove(id: number) {
        return await models.ClientAddress.remove({ where: { id } });
    }

}

export default new ClientAddressService(); 