import { IAddress } from './address.model';

const models = require('./../../models');

class AddressService {
    constructor() { }

    async findById(id: number) {
        return await models.Address.findOne({ where: { id } });
    }

    async create(address: IAddress) {
        return await models.Address.create(address);
    }

    async update(id: number, address: IAddress) {
        return await models.Address.update(address, {
            where: { id },
            fields: ['place', 'zipCode', 'active', 'neighborhood']
        });
    }

    async remove(id: number) {
        return await models.Address.update({
            active: false,
            cancellationDate: Date.now
        }, {
                where: { id },
                fields: ['active', 'cancellationDate']
            });
    }
}

export default new AddressService(); 