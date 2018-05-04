import { IReceivePayment } from './receive-payment.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class ReceivePaymentService extends ServiceModules<IReceivePayment>{
    constructor() {
        super(
            models.ReceivePayment,
            ['paymentDate', 'pricePaid', 'priceDiscount', 'active', 'receiveId', 'typeDocumentId'],
            ['id', 'registrationDate', 'cancellationDate', 'paymentDate', 'pricePaid', 'priceDiscount', 'active', 'receiveId', 'typeDocumentId']
        );
    }

    async remove(id: number) {
        return await models.ReceivePayment.update({ cancellationDate: Date.now, active: false }, {
            where: { id },
            fields: ['cancellationDate', 'active']
        });
    }
}

export default new ReceivePaymentService();