import { ICity } from './city.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class CityService extends ServiceModules<ICity>{
    constructor() {
        super(
            models.City,
            ['name', 'code', 'active'],
            ['id', 'registrationDate', 'cancellationDate', 'name', 'code', 'active']
        );
    }

    async remove(id: number) {
        return await models.City.update({
            active: false,
            cancellationDate: Date.now
        }, {
                where: { id },
                fields: ['active', 'cancellationDate']
            });
    }

}

export default new CityService();