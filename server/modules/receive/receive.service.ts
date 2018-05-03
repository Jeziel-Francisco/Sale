import { IReceive } from './receive.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class ReceiveService extends ServiceModules<IReceive>{
    constructor() {
        super(
            models.Receive,
            ['history', 'portion', 'priceTotal', 'balance', 'active', 'emissionDate', 'maturityDate', 'paymentDate', 'priceInterest'],
            ['id', 'history', 'portion', 'priceTotal', 'balance', 'active', 'registrationDate', 'cancellationDate', 'emissionDate', 'maturityDate', 'paymentDate', 'priceInterest', 'clientId', 'saleId']
        );
    }

    async remove(id: number) {
        return await models.Receive.update({ cancellationDate: Date.now, active: false }, {
            where: { id },
            fields: ['cancellationDate', 'active']
        });
    }
}

export default new ReceiveService();
