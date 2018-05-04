import { IAddress } from './address.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class AddressService extends ServiceModules<IAddress>{
    constructor() {
        super(
            models.Address,
            ['place', 'zipCode', 'active', 'neighborhood'],
            ['id', 'place', 'zipCode', 'active', 'registrationDate', 'cancellationDate', 'neighborhood']
        );
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