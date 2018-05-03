import { Request, Response } from 'express';

import ControllerModules from "../interface-controller.modules";
import ProviderPhoneBusiness from './provider-phone.business';

class ProviderPhoneController extends ControllerModules {
    constructor() {
        super(ProviderPhoneBusiness);
    }
}

export default new ProviderPhoneController();