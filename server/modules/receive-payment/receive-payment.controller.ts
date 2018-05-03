import { Request, Response } from 'express';

import ReceivePaymentBusiness from './receive-payment.business';
import ControllerModules from '../interface-controller.modules';

class ReceivePayment extends ControllerModules {
    constructor() {
        super(ReceivePaymentBusiness);
    }
}

export default new ReceivePayment();