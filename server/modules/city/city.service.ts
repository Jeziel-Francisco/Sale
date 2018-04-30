import { ICity } from './city.model';

const models = require('./../../models');

class CityService {
    constructor() { }

    async findById(id: number) {
        return await models.City.findOne({ where: { id } });
    }

    async create(city: ICity) {
        return await models.City.create(city);
    }

    async update(id: number, city: ICity) {
        return await models.City.update(city, {
            where: { id },
            fields: ['name', 'code', 'active']
        });
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