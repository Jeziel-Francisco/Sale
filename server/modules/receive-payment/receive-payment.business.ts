import { IReceivePayment } from './receive-payment.model';
import { Response } from 'express';

import BusinessModules from "../interfate-business.modules";
import ReceivePaymentService from './receive-payment.service';

class ReceivePaymentBusiness extends BusinessModules<IReceivePayment>{
    constructor() {
        super(ReceivePaymentService);
    }
}

export default new ReceivePaymentBusiness();